$(document).ready(function () {
    // var simplemde = new SimpleMDE({ element: $("#MyID")[0] });
    $('.simplemde-editor').each(function () {
        var options = {};
        options = $.extend({}, options, $(this).data('options'));
        new SimpleMDE({ toolbar: [
            "bold",
            "italic",
            "strikethrough",
            "|",
            "heading",
            "heading-smaller",
            "heading-bigger",
            "heading-1",
            "heading-2",
            "heading-3",
            "|",
            "quote",
            "unordered-list",
            "ordered-list",
            "clean-block",
            "|",
            "link",
            "image",
            "table",
            "horizontal-rule",
            "|",
            "preview",
            "side-by-side",
            "fullscreen",
            "guide"
        ], options: options, element: $(this)[0] });
    });
});
