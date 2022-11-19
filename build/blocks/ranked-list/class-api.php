<?php

namespace DBE\Block\RankedList;

use DBE\Helper;

class API
{
    public static function init()
    {
        add_action("rest_api_init", function () {
            $user_id = get_current_user_id();
            register_rest_route(DBE_PREFIX . "/v1/rankedlist", "/vote", [
                //   "methods" => [ "POST" ],
                "methods" => [ "POST", "GET" ],
                //   "methods" => [ "GET" ],
                "callback" => function (\WP_REST_Request $request) use ($user_id) {
                    global $wpdb;
                    if ($user_id == null || $user_id == false) {
                        return new \WP_Error('invalid_request', 'Kamu belum login', [
                            'status' => 409,
                            'user_id' => $user_id,
                        ]);
                    }

                    $req = $request->get_body();
                    $req = json_decode($req, true);

                    $post_id = $req["post_id"];
                    $block_id = $req["block_id"];
                    $action = $req["action"];
                    $index = $req["index"];

                    $post = get_post($post_id);

                    $post_blocks = parse_blocks($post->post_content);
                    $post_blocks = array_map(function ($block) use ($block_id, $action, $index, $user_id) {
                        // if ($block['blockName'] == 'dbe/ranked-list' && $block["attrs"]['blockID'] == $block_id) {
                        if ($block['blockName'] == 'dbe/ranked-list') {
                            // if ($block["attrs"]['blockID'] == $block_id) {
                            $block["attrs"]["lists"][ $index ]["likes"] = array_filter($block["attrs"]["lists"][ $index ]["likes"], fn ($m) => $m != $user_id);
                            $block["attrs"]["lists"][ $index ]["dislikes"] = array_filter($block["attrs"]["lists"][ $index ]["dislikes"], fn ($m) => $m != $user_id);

                            array_push($block["attrs"]["lists"][ $index ][ "{$action}s" ], $user_id);
                        }

                        return $block;
                    }, $post_blocks);

                    $serialize = serialize_blocks($post_blocks);
                    $serialize = preg_replace("/\\\u0026/i", "&", $serialize);

                    wp_update_post([
                        'ID'           => $post_id,
                        'post_content' => $serialize,
                    ]);

                    $response = new \WP_REST_Response($post_blocks);
                    $response->set_status(200);
                    return $response;
                },
            ]);
        });
    }
}
