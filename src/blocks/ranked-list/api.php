<?php
// require_once('wp-load.php');
$user_id = ""; // get_user_by( 'id', $GLOBALS['user_id'] );

function dbe_callback_rankedlist_vote_api(WP_REST_Request $request)
{
  $user_id = $GLOBALS['user_id'];
  if (!$user_id)  return new WP_Error('invalid_request', 'Kamu belum login', array('status' => 409));

  $req = $request->get_body();
  $req = json_decode($req, true);

  $post_id = $req["post_id"];
  $block_id = $req["block_id"];
  $action = $req["action"];
  $index = $req["index"];

  // $post_id = 15;
  // $block_id = "cc121dc1-2d77-4384-9ba6-675a0f11c460";
  // $action = "like";
  // $index = 0;

  $post = get_post($post_id);

  $post_blocks = parse_blocks($post->post_content);
  $post_blocks = array_map(function ($block) use ($block_id, $action, $index, $user_id) {
    // if ($block['blockName'] == 'dbe/ranked-list' && $block["attrs"]['blockID'] == $block_id) {
    if ($block['blockName'] == 'dbe/ranked-list') {
      // if ($block["attrs"]['blockID'] == $block_id) {
      $block["attrs"]["lists"][$index]["likes"] = array_filter($block["attrs"]["lists"][$index]["likes"], fn ($m) => $m != $user_id);
      $block["attrs"]["lists"][$index]["dislikes"] = array_filter($block["attrs"]["lists"][$index]["dislikes"], fn ($m) => $m != $user_id);

      array_push($block["attrs"]["lists"][$index]["{$action}s"], $user_id);
    }

    return $block;
  }, $post_blocks);

  // return $post_blocks;

  $serialize = serialize_blocks($post_blocks);
  $serialize = preg_replace("/\\\u0026/i", "&", $serialize);

  wp_update_post([
    'ID'           => $post_id,
    'post_content' => $serialize,
  ]);

  $response = new WP_REST_Response($post_blocks);
  $response->set_status(200);
  return $response;
}

add_action("rest_api_init", function () {
  $GLOBALS['user_id'] = get_current_user_id(); //<- add this
  register_rest_route("dbe/v1/rankedlist", "vote", [
    "methods" => ["POST", "GET"],
    "callback" => "dbe_callback_rankedlist_vote_api"
  ]);
});

function expl(WP_REST_Request $request)
{
  $request_body = $request->get_body_params();
  if (update_post_meta($request_body['post_id'], 'post_data', $request_body)) {
    $response = new WP_REST_Response(array('message' => 'Successful'));
    $response->set_status(200);
    return $response;
  } else {
    return new WP_Error('invalid_request', 'Something went wrong', array('status' => 403));
  }
}
