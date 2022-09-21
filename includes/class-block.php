<?php

namespace GB;

class Block {
    private string $block_name;
    private string $style;
    private string $editor_script;

    public function __construct( string $block_name ) {
        $this->block_name = $block_name;

        $formatted_name = str_replace('/', '-', $block_name);

        $this->style = $formatted_name;
        $this->editor_script = $formatted_name;
    }

    public function register() {
        register_block_type($this->block_name, array(
            'style' => 'spawn-blocks-styles',
            'editor_script' => 'spawn-blocks-editor',
            'editor_style' => 'spawn-blocks-editor',
        ));
    }
}
