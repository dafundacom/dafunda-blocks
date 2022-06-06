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

function clean_string($string)
{
  $s = trim($string);
  $s = iconv("UTF-8", "UTF-8//IGNORE", $s); // drop all non utf-8 characters

  // this is some bad utf-8 byte sequence that makes mysql complain - control and formatting i think
  $s = preg_replace('/(?>[\x00-\x1F]|\xC2[\x80-\x9F]|\xE2[\x80-\x8F]{2}|\xE2\x80[\xA4-\xA8]|\xE2\x81[\x9F-\xAF])/', ' ', $s);

  $s = preg_replace('/\s+/', ' ', $s); // reduce all multiple whitespace to a single space

  return $s;
}

// "<!-- wp:dbe/ranked-list {"blockID":"580243cf-6744-41f3-af91-336962dc5c13","lists":[{"title":"Us","likes":[1],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85376962/original/midsommar-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Midsommar","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85377884/original/ready-or-not-photo-u2?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Ready or Not","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85374949/original/it-chapter-two-photo-u6?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"It: Chapter Two","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85376051/original/doctor-sleep-photo-u3?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Doctor Sleep","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4257/85120583/original/the-invisible-man-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"The Invisible Man","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85375809/original/85375809-photo-u8?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Scary Stories to Tell in the Dark","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4270/85381960/original/85381960-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Fear Street: 1666","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4270/85380569/original/85380569-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"The Platform","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4366/87305551/original/87305551-photo-u180011044?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Choose or Die","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4365/87291926/original/87291926-photo-u-1683536683?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Fresh","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85377197/original/85377197-photo-u3?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Annabelle Comes Home","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85376060/original/brightburn-photo-u3?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Brightburn","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85379020/original/a-quiet-place-part-ii-photo-u2?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"A Quiet Place: Part II","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://i.ytimg.com/vi/vK9cO7QN8Ak/hqdefault.jpg?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"The Hunt","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4270/85381959/original/85381959-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Fear Street: 1978","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://i.ytimg.com/vi/UyjGatnFLds/hqdefault.jpg?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"The Lighthouse","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85374768/original/escape-room-photo-u2?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Escape Room","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://i.ytimg.com/vi/L9iksbKYrKg/default.jpg?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Zombieland: Double Tap","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/1189/23773439/original/23773439-photo-u3?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Fear Street: 1994","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4270/85381448/original/85381448-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Freaky","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4337/86721012/original/86721012-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Lamb","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85379028/original/halloween-kills-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Halloween Kills","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85379576/original/85379576-photo-u4?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Escape Room: Tournament of Champions","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4270/85381164/original/85381164-photo-u2?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"#Alive","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85376079/original/candyman-photo-u2?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Candyman","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4358/87144976/original/87144976-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Cube","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4365/87282975/original/87282975-photo-u-1433270555?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"X","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85379080/original/85379080-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Saint Maud","likes":[],"dislikes":[]},{"imageid":"image id","imagealt":"image alt","imageurl":"https://imgix.ranker.com/user_node_img/4269/85379560/original/85379560-photo-u1?auto=format\u0026q=60\u0026fit=crop\u0026fm=pjpg\u0026dpr=2\u0026crop=faces\u0026h=90\u0026w=90","title":"Malignant","likes":[],"dislikes":[]}]} /-->"


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
