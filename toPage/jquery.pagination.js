(function ($) {
    var defaultOpts = {
        // 当前每页条目数
        pageSize: 10,
        // 配置每页条目数
        pageSizes: [10],
        totalItem: 0,
        currentPage: 1,
        changePage: function () {}
    };
    var options = {};
    var prevHtml = "<button class='prev-page'>上一页</button>";
    var nextHtml = "<button class='next-page'>下一页</button>";
    var pageIndexNormalHtml = "<button class='page-num'>%index%</button>";
    var pageIndexActiveHtml = "<button class='page-num currentPage'>%index%</button>";
    var pageIndexDot = "<span class='page_dot'>•••</span>";
    var pageSizeTotalHtml = "<span class='page-total'>共&nbsp%total%&nbsp页</span>";
    var gotoPageHtml = "<span>&nbsp到第</span><input class='input-page-num' type='text' value='%gotoPageVal%'><span class='page-text'>页</span><button class='to-page-num'>确定</button>";

    $.fn.extend({
        "pagination": function (opts) {
            console.log(this, typeof this, this instanceof jQuery);
            initPaginationOption(opts);
            createPaginationHtml();
            refreshPagination();
        }
    });

    function initPaginationOption (opts) {
        console.log(this);
        /* if (!opts) {
            options = $.extend({}, defaultOpts);
            return;
        }

        options.target = opts.target;
        options.$target = $(opts.target);
        options.totalItem = (opts.totalItem !== undefined) ? parseInt(opts.totalItem, 10) : defaultOpts.totalItem;
        options.pageSize = (opts.pageSize !== undefined) ? parseInt(opts.pageSize, 10) : defaultOpts.pageSize;
        options.currentPage = (opts.currentPage !== undefined) ? parseInt(opts.currentPage) : defaultOpts.currentPage;
        options.totalPage = Math.ceil(options.totalItem / options.pageSize);
        options.changePage = typeof opts.changePage === "function" ? opts.changePage : defaultOpts.changePage; */
    }

    function createPaginationHtml () {
        console.log(this);
        /* var regPos = /^\d+$/;
        var $target = options.$target;
        var currentPage = options.currentPage;
        var totalPage = options.currentPage;
        var pageSize = options.pageSize;
        var paginationHtml = prevHtml;
        var gotoPageVal = (currentPage === totalPage) ? 1 : currentPage;

        if (regPos.test(currentPage)) {
            currentPage = currentPage < 1 ? 1 : (currentPage > totalPage ? totalPage : currentPage);
        } else {
            currentPage = 1;
        }

        options.changePage(pageSize, currentPage);

        for (var i = 0; i < totalPage - 1; i++) {
            if (totalPage > 8 && currentPage > 6 && i < currentPage - 3) {
                if (i < 2) {
                    paginationHtml += pageIndexNormalHtml.replace("%index%", i + 1);
                } else if (i === 2) {
                    paginationHtml += pageIndexDot;
                }
            } else if (totalPage > 8 && currentPage < totalPage - 3 && i > currentPage + 1) {
                if (currentPage > 6 && i === currentPage + 2) {
                    paginationHtml += pageIndexDot;
                } else if (currentPage < 7) {
                    if (i < 8) {
                        paginationHtml += pageIndexNormalHtml.replace("%index%", i + 1);
                    } else if (i === 8) {
                        paginationHtml += pageIndexDot;
                    }
                }
            } else {
                if (i === currentPage - 1) {
                    paginationHtml += pageIndexActiveHtml.replace("%index%", i + 1);
                } else {
                    paginationHtml += pageIndexNormalHtml.replace("%index%", i + 1);
                }
            }
        }
        if (currentPage === totalPage) {
            paginationHtml += pageIndexActiveHtml.replace("%index%", i + 1);
        } else {
            paginationHtml += pageIndexNormalHtml.replace("%index%", i + 1);
        }

        paginationHtml += nextHtml + pageSizeTotalHtml.replace("%total%", totalPage) + gotoPageHtml.replace("%gotoPageVal%", gotoPageVal);
        $target.append(paginationHtml);

        if (currentPage === 1) {
            $(options.target + " .prev_page").attr("disabled", "disabled").addClass("btn_dis");
        } else {
            $(options.target + "prev_page").removeAttr("disabled").removeClass("btn_dis");
        }
        if (currentPage === totalPage) {
            $(options.target + " .page_ctrl .next_page").attr("disabled", "disabled").addClass("btn_dis");
        } else {
            $(options.target + " .page_ctrl .next_page").removeAttr("disabled").removeClass("btn_dis");
        } */
    }

    function refreshPagination () {
        console.log(this);
        /* var $target = options.$target;

        $target.on("click", "button", function () {
            var $this = $(this);
            var currentPage = options.currentPage;
            var totalPage = options.currentPage;

            if ($this.hasClass("prev-page")) {
                if (currentPage > 1) {
                    options.currentPage--;
                    $this.parent(".page-ctrl").html("");
                    createPaginationHtml();
                }
            } else if ($this.hasClass("next_page")) {
                if (currentPage < totalPage) {
                    options.currentPage++;
                    $this.parent(".page-ctrl").html("");
                    createPaginationHtml();
                }
            } else if ($this.hasClass("page_num") && !$this.hasClass("currentPage")) {
                options.currentPage = parseInt($this.html());
                $this.parent(".page-ctrl").html("");
                createPaginationHtml();
            } else if ($this.hasClass("to_page_num")) {
                options.currentPage = parseInt($this.siblings(".input-page-num").val());
                $this.parent(".page-ctrl").html("");
                createPaginationHtml();
            }
        }); */
    }
})(window.jQuery);

/* 原始代码
var obj_box = (opts.obj_box !== undefined) ? opts.obj_box : function () {
    return;
};

var totalItem = (opts.totalItem !== undefined) ? parseInt(opts.totalItem, 10) : 0;
var pageSize = (opts.pageSize !== undefined) ? parseInt(opts.pageSize, 10) : 5;
var currentPage = (opts.currentPage !== undefined) ? parseInt(opts.currentPage) : 1;
var totalPage = Math.ceil(totalItem / pageSize);
if (totalPage < 2) {
    return;
}
$(obj_box).append('<div class="page_content"></div>');
$(obj_box).append('<div class="page_ctrl"></div>');

function page_even() {
    var regPos = /^\d+$/;
    if (regPos.test(currentPage)) {
        currentPage = currentPage < 1 ? 1 : (currentPage > totalPage ? totalPage : currentPage);
    } else {
        currentPage = 1;
    }
    opts.change_content(pageSize, currentPage);
    var inp_val = (currentPage == totalPage) ? 1 : currentPage;
    var append_html = '<button class="prev_page">上一页</button>';
    for (var i = 0; i < totalPage - 1; i++) {
        if (totalPage > 8 && currentPage > 6 && i < currentPage - 3) {
            if (i < 2) {
                append_html += '<button class="page_num">' + (i + 1) + '</button>';
            } else if (i == 2) {
                append_html += '<span class="page_dot">•••</span>';
            }
        } else if (totalPage > 8 && currentPage < totalPage - 3 && i > currentPage + 1) {
            if (currentPage > 6 && i == currentPage + 2) {
                append_html += '<span class="page_dot">•••</span>';
            } else if (currentPage < 7) {
                if (i < 8) {
                    append_html += '<button class="page_num">' + (i + 1) + '</button>';
                } else if (i == 8) {
                    append_html += '<span class="page_dot">•••</span>';
                }
            }
        } else {
            if (i == currentPage - 1) {
                append_html += '<button class="page_num currentPage">' + (i + 1) + '</button>';
            } else {
                append_html += '<button class="page_num">' + (i + 1) + '</button>';
            }
        }
    }
    if (currentPage == totalPage) {
        append_html += '<button class="page_num currentPage">' + (i + 1) + '</button>';
    } else {
        append_html += '<button class="page_num">' + (i + 1) + '</button>';
    }
    append_html += '<button class="next_page">下一页</button><span class="page_total">共 ' + totalPage + ' 页, 到第</span><input class="input_page_num" type="text" value="' + inp_val + '"><span class="page_text">页</span><button class="to_page_num">确定</button>';
    $(obj_box).children('.page_ctrl').append(append_html);
    if (currentPage == 1) {
        $(obj_box + ' .page_ctrl .prev_page').attr('disabled', 'disabled').addClass('btn_dis');
    } else {
        $(obj_box + ' .page_ctrl .prev_page').removeAttr('disabled').removeClass('btn_dis');
    }
    if (currentPage == totalPage) {
        $(obj_box + ' .page_ctrl .next_page').attr('disabled', 'disabled').addClass('btn_dis');
    } else {
        $(obj_box + ' .page_ctrl .next_page').removeAttr('disabled').removeClass('btn_dis');
    }
};
page_even();
$(obj_box + ' .page_ctrl').on('click', 'button', function () {
    var that = $(this);
    if (that.hasClass('prev_page')) {
        if (currentPage != 1) {
            currentPage--;
            that.parent('.page_ctrl').html('');
            page_even();
        }
    } else if (that.hasClass('next_page')) {
        if (currentPage != totalPage) {
            currentPage++;
            that.parent('.page_ctrl').html('');
            page_even();
        }
    } else if (that.hasClass('page_num') && !that.hasClass('currentPage')) {
        currentPage = parseInt(that.html());
        that.parent('.page_ctrl').html('');
        page_even();
    } else if (that.hasClass('to_page_num')) {
        currentPage = parseInt(that.siblings('.input_page_num').val());
        that.parent('.page_ctrl').html('');
        page_even();
    }
});
 */
