!function(t,e){"use strict";var i={init:function(){var a={"elementskit-advance-accordion.default":i.Advanced_Accordion,"elementskit-advanced-toggle.default":i.Advanced_Toggle,"elementskit-tab.default":i.Advanced_Tab,"elementskit-gallery.default":i.Gallery,"elementskit-motion-text.default":i.MotionText,"elementskit-popup-modal.default":i.PopupModal,"elementskit-zoom.default":i.Zoom,"elementskit-unfold.default":i.Unfold,"elementskit-woo-product-carousel.default":i.Woo_Product_slider,"elementskit-woo-mini-cart.default":i.Mini_Cart,"elementskit-table.default":i.Table,"elementskit-timeline.default":i.TimeLine,"elementskit-creative-button.default":i.Creative_Button,"elementskit-hotspot.default":i.Hotspot,"ekit-vertical-menu.default":i.Vertical_Menu,"elementskit-video-gallery.default":i.Video_Gallery,"elementskit-facebook-feed.default":i.Facebook_Feed,"elementskit-facebook-review.default":i.Facebook_Review,"elementskit-yelp.default":i.Yelp_Review,"elementskit-trustpilot.default":i.Trustpilot_Review,"elementskit-blog-posts.default":i.BlogPosts};t.each(a,(function(t,i){e.hooks.addAction("frontend/element_ready/"+t,i)}))},WidgetAreaJSUpdate:function(){var e=t(this);e.find(".ekit-swiper-container").each((function(){this.swiper.update()})),e.find(".elementskit-image-comparison").trigger("resize.twentytwenty")},Social_Review_Slider:function(e){e.each((function(){let e=`\n\t\t\t\t\t<button type="button" class="slick-prev slick-arrow">\n\t\t\t\t\t\t<i class="${t(this).data("prevarrow")?t(this).data("prevarrow"):"icon icon-left-arrow2"}"></i>\n\t\t\t\t\t</button>\n\t\t\t\t`,i=`\n\t\t\t\t\t<button type="button" class="slick-next slick-arrow">\n\t\t\t\t\t\t<i class="${t(this).data("nextarrow")?t(this).data("nextarrow"):"icon icon-right-arrow2"}"></i>\n\t\t\t\t\t</button>\n\t\t\t\t`,a=!(!t(this).data("autoplay")||"yes"!==t(this).data("autoplay")),o={autoplay:a,slidesPerView:"undefined"!==t(this).data("slidestoshow")?t(this).data("slidestoshow"):1,slidesPerGroup:"undefined"!==t(this).data("slidestoscroll")?t(this).data("slidestoscroll"):1,speed:"undefined"!==t(this).data("speed")?t(this).data("speed"):1e3,arrows:"yes"===t(this).data("showarrow"),dots:"yes"===t(this).data("showdot"),pauseOnHover:"yes"==t(this).data("pauseonhover"),infinite:"undefined"===t(this).data("autoplay")||a,breakpoints:"[]"!==t(this).data("responsive")?t(this).data("responsive"):[],loop:"yes"==t(this).data("carousel_loop")};o.arrows&&(t(this).append(e+i),o.navigation={prevEl:t(this).find(".slick-prev"),nextEl:t(this).find(".slick-next")}),o.dots&&(o.pagination={el:t(this).find(".swiper-pagination"),type:"custom",clickable:!0,renderCustom:(t,e,i)=>{var a="";for(let t=1;t<=i;t++)a+='<li role="presentation" class="'+(e===t?" swiper-pagination-bullet-active slick-active":"swiper-pagination-bullet")+'"><button type="button" role="tab"  tabindex="0" aria-selected="true" class="">'+t+"</button></li>";return a}});let n=new Swiper(t(this).find(".swiper-container"),o);a&&o.pauseOnHover&&t(this).find(".swiper-container").hover((function(){n.autoplay.stop()}),(function(){n.autoplay.start()}))}))},Handle_Review_More:function(e){t(e).find(".more").each((function(){t(this).click((()=>{let e=t(t(this).parent().get(0)).find("span").first();!0===t(this).data("collapsed")?(t(e).text(t(this).data("text")),t(this).text("...Collapse")):(t(e).text(t(this).data("text").substr(0,120)),t(this).text("...More")),t(this).data("collapsed",!t(this).data("collapsed"))}))}))},ShowModal:function(e,i,a){if(a)return;t.find(".ekit-popup-modal.show").forEach((e=>t(e).removeClass("show")));let o=i.data("animation");e.addClass("show"),o&&i.addClass(o)},Advanced_Accordion:function(e){e.find(".elementskit-card > .collapse").on("shown.bs.collapse",(function(){var a=t(this);i.WidgetAreaJSUpdate.call(a),ElementsKit_Helper.ajaxLoading(e,a)})).filter(".show").trigger("shown.bs.collapse")},Advanced_Toggle:function(e){var a=e.find('[data-ekit-toggle="tab"]'),o=e.find(".ekit-custom-control-input");if(e.find(".elemenetskit-toggle-indicator").length>0){let i=e.find(".elemenetskit-toggle-indicator"),a=e.find(".elementskit-toggle-nav-link.active");function n(t,e){let o="click"===t?e.outerWidth():a.outerWidth(),n="click"===t?e.outerHeight():a.outerHeight(),s="click"===t?e.position().left:a.position().left,l="click"===t?e.position().top:a.position().top;i.attr("class","elemenetskit-toggle-indicator "+e.parents("li").data("elementor_current_item")),i.css({width:o,height:n,left:s,top:l})}n(null,a),e.find(".elementkit-tab-nav > li > a").on("click",(function(e){n(e.type,t(this))}))}o.on("click",(function(){var e=this.checked?".elementskit-switch-nav-link-2":".elementskit-switch-nav-link-1";t(this).siblings(e).tab("show")})),a.on("shown.bs.tab",(function(){var a=e.find(t(this).attr("href"));o.length&&(o[0].checked=this.getAttribute("data-toggled")),i.WidgetAreaJSUpdate.call(a),ElementsKit_Helper.ajaxLoading(e,a)})).filter(".active").trigger("shown.bs.tab")},Advanced_Tab:function(e){var a=e.find('[data-ekit-toggle="tab"]'),o=a.data("ekit-toggle-trigger"),n=e.data("settings");ElementsKit_Helper.triggerClickOnEvent(o,a),a.on("shown.bs.tab",(function(){var a=e.find(t(this).attr("href"));i.WidgetAreaJSUpdate.call(a),ElementsKit_Helper.setURLHash(n,this,"ekit-handler-id"),ElementsKit_Helper.ajaxLoading(e,a)})).filter(".active").trigger("shown.bs.tab")},Gallery:function(e){var i=e.find(".ekit_gallery_grid"),a=i.data("grid-config");i.imagesLoaded((function(){i.isotope(a)})),e.find(".filter-button-wraper").find("a").on("click",(function(e){e.preventDefault();var a=t(this);a.parents(".option-set").find(".selected").removeClass("selected"),a.addClass("selected"),i.isotope({filter:a.data("option-value")})}));var o=e.find(".ekit-gallery-portfolio-tilt"),n=i.data("tilt-config");o.tilt(n)},MotionText:function(e){var i=e.find(".ekit_motion_text_title");if(i.hasClass("ekit_char_based")){var a=i.children(".ekit_motion_text"),o=a.text().split(""),n=i.data("ekit-animation-delay-s"),s=n,l="";t.each(o,(function(t,e){l+=" "===e?e:'<span class="ekit-letter" style="animation-delay: '+n+"ms; -moz-animation-delay: "+n+"ms; -webkit-animation-delay: "+n+'ms;">'+e+"</span>",n+=s})),a.html(l)}i.elementorWaypoint((function(){var t=this.adapter.$element.data("animate-class");this.adapter.$element.addClass(t).css("opacity",1),this.destroy()}),{offset:"100%"})},PopupModal:function(t){var e=t.data("id"),a=t.data("settings"),o=a&&"enable_cookie_consent"in a,n=o&&document.cookie.match("popup_cookie_"+e),s=t.find(".ekit-popup-modal"),l=t.find(".ekit-popup__content"),r=s.data("toggletype"),d=s.data("toggleafter");"time"===r&&d>0&&setTimeout((()=>{i.ShowModal(s,l,n)}),1e3*d);var c=t.find(".ekit-popup-modal__toggler-wrapper button, .ekit-popup-modal__toggler-wrapper img"),p=t.find(".ekit-popup__close, .ekit-popup-modal__close, .ekit-popup-footer__close");c.on("click",(function(t){t.preventDefault(),i.ShowModal(s,l)})),p.on("click",(function(t){t.preventDefault(),s.addClass("closing"),setTimeout((()=>{s.removeClass("show"),s.removeClass("closing")}),450),o&&(document.cookie="popup_cookie_"+e+"=1; path=/")}))},Zoom:function(t){var e=t.find(".ekit-zoom-counter"),i=t.find(".ekit-zoom-wrapper").data("settings");if(!e.length)return!1;var a=e.data("date"),o=new Date(a).getTime();o||(o=0);var n=setInterval((function(){var t=(new Date).getTime(),a=o-t,s=Math.floor(a/864e5),l=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4),d=Math.floor(a%6e4/1e3),c="<ul><li><span class='number'>"+s+"</span><span class='text'>"+i.days+"</span></li><li><span class='number'>"+l+"</span><span class='text'>"+i.hours+"</span></li><li><span class='number'>"+r+"</span><span class='text'>"+i.minutes+"</span></li><li><span class='number'>"+d+"</span><span class='text'>"+i.seconds+"</span></li></ul>";e.html(c),a<0&&(clearInterval(n),e.html("EXPIRED"))}),1e3)},Unfold:function(e){var i=e.find(".ekit-unfold-btn"),a=e.find(".ekit-unfold-wrapper"),o=e.find(".ekit-unfold-data"),n=e.find(".ekit-unfold-data-inner"),s=a.data("config");s.collapse_height>=n.outerHeight()&&(i.hide(),o.addClass("active")),i.on("click",(function(){var e=this,i=t(this);e.style.display="none",o.hasClass("active")?(o.animate({height:s.collapse_height},parseInt(s.transition_duration,10)||0),i.html(s.expand_text)):(o.animate({height:n.outerHeight()},parseInt(s.transition_duration,10)||0),i.html(s.collapse_text)),o.toggleClass("active"),o.hasClass("active")||setTimeout((()=>{o[0].scrollIntoView({block:"center"})}),[300]),setTimeout((function(){e.style.display="block"}),300)}))},Woo_Product_slider:function(t){let e=t.find(".ekit-swiper-container"),i=e.data("autoplay"),a=e.data("loop"),o=e.data("speed"),n=e.data("space-between"),s=e.data("responsive-settings");new Swiper(e,{navigation:{nextEl:t.find(".ekit-navigation-next"),prevEl:t.find(".ekit-navigation-prev")},pagination:{el:t.find(".ekit-swiper-pagination"),type:"bullets",clickable:!0},autoplay:i&&i,loop:a&&Boolean(a),speed:o&&Number(o),slidesPerView:Number(s.ekit_columns_mobile),spaceBetween:n&&Number(n),breakpointsInverse:!0,breakpoints:{640:{slidesPerView:Number(s.ekit_columns_mobile),spaceBetween:n&&Number(n)},768:{slidesPerView:Number(s.ekit_columns_tablet),spaceBetween:n&&Number(n)},1024:{slidesPerView:Number(s.ekit_columns_desktop),spaceBetween:n&&Number(n)}}})},Mini_Cart:function(e){var i=e.find(".ekit-dropdown-back");i.on("click mouseenter mouseleave",(function(e){var i=t(this),a=i.hasClass("ekit-mini-cart-visibility-click"),o=i.hasClass("ekit-mini-cart-visibility-hover"),n=i.find(".ekit-mini-cart-container");"click"===e.type&&a&&!t(e.target).parents("div").hasClass("ekit-mini-cart-container")?n.fadeToggle():"mouseenter"===e.type&&o?n.fadeIn():"mouseleave"===e.type&&o&&n.fadeOut()})),e.find(".ekit-mini-cart--backdrop, .ekit-dropdown-back > i, .ekit-dropdown-back > .ekit-basket-item-count").on("click",(function(){i.toggleClass("is--active")}))},Table:function(i){var a=i.data("settings");if(e.isEditMode()&&(a=e.config.elements.data[i.data("model-cid")].attributes),i.find(".ekit_table").length>0){var o=i.find(".ekit_table").data("settings"),n="text"===o.nav_style.trim()||"both"===o.nav_style.trim()?'<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-prev">'+o.prev_text+"</span>":"",s="text"===o.nav_style.trim()||"both"===o.nav_style.trim()?'<span class="ekit-tbl-pagi-nav ekit-tbl-pagi-next">'+o.next_text+"</span>":"",l="arrow"===o.nav_style.trim()||"both"===o.nav_style.trim()?'<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-prev-icon '+o.prev_arrow+'" aria-hidden="true"></i>':"",r="arrow"===o.nav_style.trim()||"both"===o.nav_style.trim()?'<i class="ekit-tbl-pagi-nav-icon ekit-tbl-pagi-nav-next-icon '+o.next_arrow+'" aria-hidden="true"></i>':"";t(window).trigger("resize");var d={buttons:!0===o.button?["copy","excel","csv"]:[],bFilter:o.search,autoFill:!0,pageLength:o.item_per_page?o.item_per_page:1,fixedHeader:o.fixedHeader,responsive:o.responsive,paging:o.pagination,ordering:o.ordering,info:o.info,language:{search:'<span class="ekit-table-search-label"><i class="fa fa-search" aria-hidden="true"></i></span>',searchPlaceholder:a.search_placeholder,info:a.info_text,infoEmpty:a.info_text?a.info_text.replace(/_START_|_END_|_TOTAL_/gi,"0"):"",lengthMenu:a.entries_text,paginate:{next:s+r,previous:l+n}}};!1===o.entries&&(d.dom="Bfrtip"),i.find(".ekit_table table").DataTable(d)}},TimeLine:function(e){e.find(".elementskit-invisible").elementorWaypoint((function(){if(this.adapter.$element.hasClass("animated"))this.destroy();else{var t="animated "+this.adapter.$element.data("settings")._animation;this.adapter.$element.removeClass("elementskit-invisible").addClass(t)}}),{offset:"bottom-in-view"}),e.on("mouseenter",".horizantal-timeline > .single-timeline",(function(){t(this).addClass("hover").siblings().removeClass("hover")})).on("mouseleave",".horizantal-timeline > .single-timeline",(function(){t(this).removeClass("hover")}))},Creative_Button:function(e){var i=e.find(".ekit_position_aware_bg");e.on("mouseenter mouseleave",".ekit_position_aware",(function(e){var a=t(this).offset(),o=e.pageX-a.left,n=e.pageY-a.top;i.css({top:n,left:o})}))},Hotspot:function(e){var i=e.find(".ekit-location-on-click > .ekit-location_indicator, .ekit-location-on-hover.click > .ekit-location_indicator"),a=e.find(".ekit-location-on-hover:not(.click) > .ekit-location_indicator"),o=e.find(".ekit-location");function n(){let e=t(this).find(".ekit-location_outer"),i=t(this).find(".ekit-location_indicator"),a=i.width()/2+t(this).find(".ekit-hotspot-vertical-line").height(),o=i.width()+t(this).find(".ekit-hotspot-horizontal-line").height(),n=i.width()+t(this).find(".ekit-hotspot-horizontal-line").width();if(e.length)if(t(this).hasClass("ekit_hotspot_follow_line_top")?e.css({bottom:o,top:"auto"}):t(this).hasClass("ekit_hotspot_follow_line_bottom")?e.css({top:o,bottom:"auto"}):t(this).hasClass("ekit_hotspot_follow_line_right_top")||t(this).hasClass("ekit_hotspot_follow_line_left_top")?e.css("bottom",a):t(this).hasClass("ekit_hotspot_follow_line_right_bottom")||t(this).hasClass("ekit_hotspot_follow_line_left_bottom")?e.css("top",a):t(this).hasClass("ekit_hotspot_follow_line_right")?(e.css("top",-(e.height()/2-i.width()/2)),e.css("left",n)):t(this).hasClass("ekit_hotspot_follow_line_left")&&(e.css("top",-(e.height()/2-i.width()/2)),e.css("right",n)),e.offset().left<0)t(window).width()<=480&&t(this).find(".ekit-location_outer").css({"max-width":t(window).width(),"min-width":t(window).width()-40}),t(this).find(".ekit-location_outer").css("margin-left",Math.abs(e.offset().left));else if(e.offset().left>0)if(t(window).width()<=480&&e.width()>t(window).width())t(this).find(".ekit-location_outer").css({"max-width":t(window).width(),"min-width":t(window).width()-40}),t(this).find(".ekit-location_outer").css("left",-Math.abs(e.offset().left));else if(e.offset().left+e.width()>t(window).width()){let i=Math.abs(e.offset().left+e.width()-t(window).width());t(this).find(".ekit-location_outer").css("left",-i)}}t(window).load((function(){t(window).width()<=480&&o.hasClass("hotspot-following-line-style")&&t(window).width()<=480&&(o.removeClass("ekit_hotspot_follow_line_top ekit_hotspot_follow_line_bottom ekit_hotspot_follow_line_right_top ekit_hotspot_follow_line_right_bottom ekit_hotspot_follow_line_left_bottom ekit_hotspot_follow_line_right ekit_hotspot_follow_line_left ekit_hotspot_follow_line_left_top"),o.removeClass("hotspot-following-line-style").addClass("hotspot-following-line-straight ekit_hotspot_follow_line_top")),e.find(".ekit-location_outer").each((function(){t(this).offset().top<0&&t(this).parents(".ekit-location-on-hover").addClass("bottom"),t(this).parent().hasClass("auto")&&t(this).offset().top<0&&t(this).parent().removeClass("ekit_hotspot_follow_line_top").addClass("ekit_hotspot_follow_line_bottom")})),setTimeout((function(){o.each(n)}),1e3)})),i.on("click",(function(){e.find(".ekit-all-activated").length||t(this).parent().siblings().removeClass("active"),t(this).parent().toggleClass("active").removeClass("ekit-all-activated")})),a.on("mouseenter",(function(){o.removeClass("active")}))},Vertical_Menu:function(e){if(e.find(".ekit-vertical-main-menu-on-click").length>0){let i=e.find(".ekit-vertical-main-menu-on-click"),a=e.find(".ekit-vertical-menu-tigger"),o=t("body").data("elementor-device-mode");"tablet"!==o&&"mobile"!==o||i.removeClass("vertical-menu-active"),a.on("click",(function(t){t.preventDefault(),i.toggleClass("vertical-menu-active")}))}if(e.find(".elementskit-megamenu-has").length>0){let i=e.find(".elementskit-megamenu-has"),a=e.parents(".elementor-container"),o=e.find(".ekit-vertical-main-menu-wraper"),n=Math.floor(a.width()-o.width())+"px";i.on("mouseenter",(function(){let e=t(this).data("vertical-menu"),i=t(this).children(".elementskit-megamenu-panel");!e||e===undefined||n<=e?t(window).bind("resize",(function(){t(document).width()>1024?i.css({width:Math.floor(a.width()-o.width()-10)+"px"}):i.removeAttr("style")})).trigger("resize"):"string"==typeof e?/^[0-9]/.test(e)?i.css({width:e}):t(window).bind("resize",(function(){t(document).width()>1024?i.css({width:Math.floor(a.width()-o.width()-10)+"px"}):i.removeAttr("style")})).trigger("resize"):i.css({width:e+"px"})})),i.trigger("mouseenter")}},Video_Gallery:function(e){var i=e.find(".video-link.popup"),a=e.find(".video-link.inline"),o=(e.find(".ekit-video-gallery-wrapper.ekit-masonry"),e.find(".elementskit-main-filter>li>a")),n=e.find(".ekit-video-gallery.ekit-carousel"),s=n.data("config");i.length>0&&i.magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1,iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"https://www.youtube.com/embed/%id%?autoplay=1&rel=0"}}}}),a.on("click",(function(e){e.preventDefault();var i=t(this).data("url");t(this).addClass("video-added").append('<iframe src="'+i+'" width="643" height="360" allow="autoplay" frameborder="0"></iframe>')})),o.on("click",(function(i){i.preventDefault();var a=t(this).data("value")?"."+t(this).data("value"):"";e.find("a").removeClass("selected"),t(this).addClass("selected"),e.find(".ekit-video-item").hide(),e.find(".ekit-video-item"+a).fadeIn()})),n.length&&(s.arrows&&(s.navigation={prevEl:e.find(".slick-prev"),nextEl:e.find(".slick-next")}),s.dots&&(s.pagination={el:e.find(".swiper-pagination"),type:"custom",clickable:!0,renderCustom:(t,e,i)=>{var a="";for(let t=1;t<=i;t++)a+='<li role="presentation" class="'+(e===t?" swiper-pagination-bullet-active slick-active":"swiper-pagination-bullet")+'"><button type="button" role="tab"  tabindex="0" aria-selected="true" class="">'+t+"</button></li>";return a}}),new Swiper(e.find(".swiper-container"),s)),jQuery(".ekit-video-gallery.ekit-masonry").isotope({percentPosition:!0,itemSelector:".ekit-video-item "})},Facebook_Feed:function(t){t.find(".ekit-fb-video-play-button").on("click",(()=>{let e=t.find(".video-container"),i=`\n                    <video controls autoplay>\n                        <source src="${e.data("src")}" type="video/mp4">\n                        Your browser does not support the video tag.\n                    </video>\n                `;e.html(i)}))},Facebook_Review:function(t){i.Social_Review_Slider(t.find(".ekit-review-slider-wrapper-facebook")),i.Handle_Review_More(t)},Yelp_Review:function(t){i.Social_Review_Slider(t.find(".ekit-review-slider-wrapper-yelp")),i.Handle_Review_More(t)},Trustpilot_Review:function(t){i.Social_Review_Slider(t.find(".ekit-review-slider-wrapper-trustpilot")),i.Handle_Review_More(t)},BlogPosts:function(e){var i=e.find(".ekit-blog-post-pagination-container"),a=e.data("id"),o={items:"#post-items--"+a,nagivation:"#post-nagivation--"+a};e.on("click",".ekit-blog-post-pagination-container a.page-numbers",(function(a){a.preventDefault();var n=t(this).attr("href");t.ajax({url:n}).done((function(a){var n=t(a),s=n.find(o.items).html(),l=n.find(o.nagivation).html();"loadmore"==i.data("ekit-blog-post-style")?e.find(o.items).append(s):e.find(o.items).html(s),e.find(o.nagivation).html(l)}))}))}};t(window).on("elementor/frontend/init",i.init)}(jQuery,window.elementorFrontend)