<?php

namespace GB\Block\HowTo;

use GB\Helper;

class API
{
    public static function init()
    {
        add_action("rest_api_init", function () {
            register_rest_route(GB_PREFIX . "/v1/howto", "/vote", [
                //   "methods" => [ "POST" ],
                "methods" => ["POST", "GET"],
                //   "methods" => [ "GET" ],
                "callback" => function (\WP_REST_Request $request) {
                    global $wpdb;
                    $dbe_device_id = Helper::get_device_id();
                    $exec_time = 0;
                    $start = Helper::microtime_float();
                    $table_name = $wpdb->prefix . GB_PREFIX . "_vote_log";

                    if ($request->get_method() == "GET") {
                        [$block_id, $block_name, $action, $post_id] = [
                            '5a69c53c-c022-48b3-b9f0-9c32a2a4bd7ada',
                            'how_to',
                            'dislike',
                            49,
                        ];

                        return new \WP_REST_Response("Okeeeeeeeeeeeeeeeeee", 200);
                    } else {
                        $request_body = $request->get_params();
                        // ["block_id" => $block_id, $block_name, $action, $post_id] = $request_body;
                        ["block_id" => $block_id, "block_name" => $block_name, "action" => $action, "post_id" => $post_id] = $request_body;
                        $post = get_post($post_id);
                        $post_blocks = parse_blocks($post->post_content);
                        // $post_block = array_filter($post_blocks, function ($v, $k) use ($block_id) {
                        //   return $v["attrs"]["blockID"] == $block_id;
                        // }, ARRAY_FILTER_USE_BOTH)[0];
                        foreach ($post_blocks as $index => $arr) {
                            if ($arr["attrs"]["blockID"] == $block_id) {
                                $post_block = $arr;
                                $post_block["index"] = $index;
                            }
                        }
                        $block_id = $post_blocks[0]["attrs"]["blockID"];
                        $block_name = $post_blocks[0]["blockName"];
                        $post_block["attrs"]["howToLikeCount"] = $post_block["attrs"]["howToLikeCount"] ?? 0;
                        $post_block["attrs"]["howToDisikeCount"] = $post_block["attrs"]["howToDisikeCount"] ?? 0;
                        $post_block["attrs"]["howToVoteCount"] = $post_block["attrs"]["howToVoteCount"] ?? 0;
                    }

                    $sql_string = "SELECT * FROM $table_name WHERE post_id = $post_id AND block_name = '$block_name' AND dbe_device_id = '$dbe_device_id'";
                    $result = $wpdb->get_row($sql_string);

                    $sql_insert = [
                        'post_id' => $post_id,
                        'block_id' => $block_id,
                        'block_name' => $block_name,
                        'action' => $action,
                        'dbe_device_id' => $dbe_device_id,
                    ];
                    $status = 'old';
                    if ($result == null) {
                        $result = $wpdb->insert(
                            $table_name,
                            $sql_insert
                        );
                        $status = 'new';
                    } else if ($action != $result->action) {
                        $result = $wpdb->update(
                            $table_name,
                            ['action' => $action],
                            ["id" => $result->id],
                        );
                        $status = 'update';
                    }

                    $updated_post_block = self::update_vote_attr($post_block, $status, $action);
                    $post_blocks[$post_block["index"]] = $updated_post_block;
                    $serialize = serialize_blocks($post_blocks);
                    $serialize = preg_replace("/\\\u0026/i", "&", $serialize);
                    wp_update_post([
                        'ID'           => $post_id,
                        'post_content' => $serialize,
                    ]);

                    $response = [
                        'response' => '',
                        'result' => $result,
                        'howToLikeCount' => $updated_post_block["attrs"]["howToLikeCount"],
                        'howToDisikeCount' => $updated_post_block["attrs"]["howToDisikeCount"],
                        'howToVoteCount' => $updated_post_block["attrs"]["howToVoteCount"],
                        'status' => $status,
                    ];

                    if ($result) {
                        $end = Helper::microtime_float();
                        $exec_time += round($end - $start, 6);
                        $response['response'] = "WPP: OK. Execution time: " . $exec_time . " seconds";
                        return new \WP_REST_Response($response, 200);
                    } else {
                        $response['response'] = 'WPP: failed to update views count!';
                        return new \WP_REST_Response($response, 500);
                    }
                },
            ]);
        });
    }

    public static function update_vote_attr($post_block, $status, $action)
    {
        if ($action == "dislike") {
            $post_block["attrs"]["howToDisikeCount"]++;
        } else {
            $post_block["attrs"]["howToLikeCount"]++;
        }

        if ($status == "update") {
            if ($action == "like") {
                if ($post_block["attrs"]["howToDisikeCount"] > 0) $post_block["attrs"]["howToDisikeCount"]--;
            } else {
                if ($post_block["attrs"]["howToLikeCount"] > 0) $post_block["attrs"]["howToLikeCount"]--;
            }
        }

        $post_block["attrs"]["howToVoteCount"] = $post_block["attrs"]["howToLikeCount"] + $post_block["attrs"]["howToDisikeCount"];
        return $post_block;
    }
}
