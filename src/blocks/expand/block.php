<?php

function dbe_render_expand_block($attributes)
{
  extract($attributes);
  ob_start();
?>

  <style>
    .expand input:checked~.expand-content {
      height: 50px;
      padding-top: 10px;
    }

    .expand input:checked~.icon-arrow {
      transform: rotate(180deg);
    }

    .expand .collapse {
      position: relative;
      margin: 0 auto;
      cursor: pointer;
      padding: 10px 20px;
      width: 300px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .expand .collapse:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    .expand input {
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
      top: 0;
      left: 0;
      cursor: pointer;
    }

    .expand .icon-arrow {
      position: absolute;
      right: 20px;
      top: 17px;
      font-size: 16px;
      transition: .2s linear;
    }

    .expand .expand-content {
      transition: .2s ease-in;
      width: 100%;
      height: 0px;
      overflow: hidden;
    }
  </style>

  <div class="expand <?= isset($className) ? " " . esc_attr($className) : "" ?>" id="expand-<?= $blockID ?>">

    <section class="collapse">
      <input type="checkbox" checked>
      <h2>I collapse!</h2>
      <div class="icon-arrow">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>

      </div>
      <div class="expand-content">
        <p>You can hide text in here</p>
      </div>
    </section>

    <section class="collapse">
      <input type="checkbox" checked>
      <h2>I expand</h2>
      <div class="icon-arrow">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>

      </div>
      <div class="expand-content">
        <p>Hi! :D</p>
      </div>
    </section>
    
    <section class="collapse">
      <input type="checkbox">
      <h2>Click me!</h2>
      <div class="icon-arrow">

        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>

      </div>
      <div class="expand-content">
        <p>Thanks for visiting my pen!</p>
      </div>
    </section>

  </div>

<?php return ob_get_clean();
}

function dbe_register_expand_block($attributes)
{
  if (function_exists("register_block_type")) {
    require dirname(dirname(__DIR__)) . "/defaults.php";
    register_block_type("dbe/expand", [
      "attributes" => $defaultValues["dbe/expand"]["attributes"],
      "render_callback" => "dbe_render_expand_block",
    ]);
  }
}

add_action("init", "dbe_register_expand_block");
