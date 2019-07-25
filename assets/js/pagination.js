(function ($) {
    $.fn.drawPage = function (options) {
        var settings = $.extend({
            from: 1,
            to: 1,
        }, options);
        return this.each(function () {
            var $this = $(this).children('ul');
            $this.empty();
            $active = '';
            var $endTag = '</a></li>';
            var $index = 0;
            if (settings.from != settings.to) {
                for (var i = settings.from; i <= settings.to; i++) {

                    if (i == settings.from) {
                        $active = "active";
                    } else {
                        $active = "";
                    }
                    var $preTag = '<li   class="page-item-fa page-item-li ' + $active + '"><a class="page-link paging-real-link" href="javascript:void(0)" tabindex="-1"';

                    $this.append($preTag + 'data-index="' + (++$index) + '"' + 'data-title="' + (i) + '" ><i class="fa fa-circle dot-pagin no-click"></i>' + $endTag);

                }
                var $preTagz = '<li id="li-arrow-prev" class="page-item-fa page-item-li"><a class="page-link paging-real-linkx" href="javascript:void(0)" tabindex="-1"';

                var $preTagX = '<li id="li-arrow-next"  class="page-item-fa page-item-li page-item-arrow"><a class="page-link paging-real-linkx" href="javascript:void(0)" tabindex="-1"';

                $this.append($preTagz + 'id="page-prev" data-index="0" data-title="Previous"><i id="arrow-prev" class="fa  fa-arrow-left arrow-pagin no-click">' + $endTag);
                $this.append($preTagX + 'id="page-next" data-index="' + (++$index) + '" data-title="Next"><i id="arrow-next" class="fa  fa-arrow-right arrow-pagin no-click">' + $endTag);
            }
        });
    }
    $.fn.pageChanging = function (options, callback) {
        var settings = $.extend({
            size: 1,
            pageShow: 5,
            page: 1,
            limit: 1,
            callback: function () {},
        }, options);
        return this.each(function () {
            var $parentTag = $(this);
            $(this).children('ul').click(
                function (event) {
                    var $element_clicked = $(event.target).is("a");
                    var $choice = $position = "";
                    if ($element_clicked == true) {
                        $choice = $(event.target).attr('data-title').toLowerCase();

                        $position = $(event.target).attr('data-index');
                    } else {
                        $choice = $(event.target).parent().attr('data-title').toLowerCase();

                        $position = $($(event.target).parent()).attr('data-index');
                    }

                    var $thisChildren = $(this).children('li');
                    var $totalPage = Math.ceil(settings.size / settings.limit);
                    var $index = parseInt($($thisChildren.filter('.active').html()).attr('data-index'));
                    var $firstPositon = parseInt($($thisChildren.eq(0).html()).attr('data-title'));
                    var $lastPositon = parseInt($($thisChildren.eq($thisChildren.length - 3).html()).attr('data-title'));
                    var $page = parseInt($($thisChildren.filter('.active').html()).attr('data-title'));
                    var $drawMain = false;
                    //  console.log("position :",$position,"totalpage :",$totalPage,"index :",$index,"firstposition :",$firstPositon,"last position :" ,$lastPositon, "page :",$page);

                    switch ($choice) {

                        case 'first':
                            if ($page > 1) {
                                $page = 1;
                                $drawMain = true;
                            } else {
                                return true;
                            }
                            break;
                        case 'last':

                            if ($page * $limit < $totalPage) {
                                $page = $totalPage;
                                $drawMain = true;
                            } else {
                                return true;
                            }
                            break;
                        case 'previous':
                            if ($page > 1) {
                                $page = $page - 1;
                                $drawMain = true;
                                $position = parseInt($index) - 1;
                            } else {
                                return true;
                            }
                            break;
                        case 'next':

                            if ($page < $totalPage) {
                                $page = $page + 1;
                                $drawMain = true;
                                $position = parseInt($index) + 1;
                            } else {
                                return true;
                            }
                            break;
                        default:

                            if ($element_clicked == true) {
                                $page = parseInt($(event.target).attr('data-title'));
                            } else {
                                $page = parseInt($($(event.target).parent()).attr('data-title'));
                            }

                            if ($position >= 1 && $position <= $totalPage) {
                                $drawMain = true;
                            } else {
                                return true;
                            }
                    }
                    if ($drawMain && $.isFunction(settings.callback)) {
                        settings.callback.call(this, {
                            page: $page,
                            total_page: $totalPage
                        });
                    }
                    if ($position >= 5 && $lastPositon < $totalPage) {

                        $parentTag.drawPage({
                            from: $lastPositon - 3,
                            to: $lastPositon + 1,
                        });
                        $position = 4;
                    }
                    if ($position <= 1 && $firstPositon > 1) {

                        $parentTag.drawPage({
                            from: $firstPositon - 1,
                            to: $firstPositon + 3,
                        });
                        $position = 2;
                    }
                    if ($position > 0 && $position < ($totalPage > 5 ? 6 : $totalPage + 1) && $totalPage > 1) {

                        $parentTag.find('ul > li').eq($position - 1).addClass('active').siblings().removeClass('active');
                    }
                });
        });
    }
    $.fn.Pagination = function (options, callback) {
        var settings = $.extend({
            size: 1,
            pageShow: 5,
            page: 1,
            limit: 1,
        }, options);

        return this.each(function () {
            var $totalPage = Math.ceil(settings.size / settings.limit);
            var $toFirstTime = $totalPage > settings.pageShow ? settings.pageShow : $totalPage;
            $(this).drawPage({
                from: 1,
                to: $toFirstTime,
            });
            $(this).children('ul').children('li').eq(settings.from).addClass('active').siblings().removeClass('active');
            $(this).pageChanging({
                size: settings.size,
                pageShow: settings.pageShow,
                page: settings.page,
                limit: settings.limit,
                callback: callback,
            });
        });

    };
}(jQuery));