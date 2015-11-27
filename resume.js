$("[data-toggle='popover']").each(function(index, element) {
    var contentElementId = $(element).data().target;
    var contentHtml = $(contentElementId).html();
    $(element).popover({
        content: contentHtml
    });
});