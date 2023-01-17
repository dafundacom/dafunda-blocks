<?php

namespace DBE\Block\Posts;

class API
{
    public static function init()
    {
        add_action("rest_api_init", function () {
            // /wp-json/dbe/v1/posts
            register_rest_route(DBE_PREFIX . "/v1", "posts", [
                "methods" => [ "POST", "GET" ],
                "callback" => function (\WP_REST_Request $request) {
                    $response = self::get_posts($request);

                    return new \WP_REST_Response($response, 200);
                },
            ]);
        });
    }

    public static function get_posts($request = [])
    {
        $post_type = $request['post_type'] ?? 'post';
        $offset = $request['offset'] ?? 0;
        $page = $request['page'] ?? 1;
        $posts_per_page = $request['posts_per_page'] ?? 5;
        $orderby = $request['orderby'] ?? "ID";
        $order = $request['order'] ?? "DESC";
        

        $offset = ($page - 1) * $posts_per_page;
        $args = [
            'post_type'  => $post_type,
            "offset" => $offset,
            "page" => $page,
            "posts_per_page" => $posts_per_page,
            "post_status" => "publish",
            "orderby" => $orderby,
            "order" => $order,
        ];

        $query = new \WP_Query($args);

        $posts = [];
        $authors = [];
        foreach ($query->posts as $key => $post) {
            setup_postdata($post);

            $author = array_filter($authors, function ($author) use ($post) {
                return $author["ID"] == $post->post_author;
            });
            if (count($author) == 0) {
                $author = [
                    "ID" => $post->post_author,
                    "name" => get_the_author($post->post_author),
                    "url" => get_author_posts_url($post->post_author),
                    "image" => get_avatar_url($post->post_author)
                ];
                $authors[] = $author;
            } else {
                $author = $author[0];
            }

            $posts[] = [
                "ID" => $post->ID,
                "guid" => $post->guid,
                "post_title" => $post->post_title,
                // "post_content" => $post->post_content,
                "post_excerpt" => $post->post_excerpt,
                "post_status" => $post->post_status,
                "post_date" => $post->post_date,
                "post_modified" => $post->post_modified,
                
                "comment_status" => $post->comment_status,
                "comment_count" => intval($post->comment_count),

                "thumbnails" => [
                    // "thumbnail" => get_the_post_thumbnail_url($post, 'thumbnail'),
                    // "medium" => get_the_post_thumbnail_url($post, 'medium'),
                    "medium_large" => get_the_post_thumbnail_url($post, 'medium_large'),
                    "large" => get_the_post_thumbnail_url($post, 'large'),
                    "full" => get_the_post_thumbnail_url($post, 'full'),
                ],
                "author" => $author,
            ];
        }

        $response = [];
        $response["posts"] = $posts;
        $response["total"] = $query->post_count;
        $response["total_post"] = $query->found_posts;
        $response["query"] = $query->query;
        $response["query_vars"] = $query->query_vars;
        $response["tax_query"] = $query->tax_query;
        $response["meta_query"] = $query->meta_query;
        $response["meta_query"] = $query->meta_query;
        $response["page"] = $args["page"];
        if ($query->found_posts > 0) {
            $response["total_page"] = intval($query->found_posts / $posts_per_page) + 1;
        } else {
            $response["total_page"] = 0;
        }

        return $response;
    }
}
