/**
 *  @name plugin
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */
;(function($, window, undefined) {
  'use strict';

  var pluginName = 'tabs';
  // var privateVar = null;
  // var privateMethod = function(el, options) {
  //   // to do
  // };

  function Plugin(element, options) {
    this.element = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, this.element.data(), options);
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var that = this;
      that.addActive();
    },
    addActive: function() {
      var that = this,
          ele = that.element,
          tabHeader = ele.find('li'),
          tabContent = ele.siblings('.tab'),
          // tabCurrent = ele.siblings('.tab.active'),
          opt = that.options;
      // $(selector).fadeIn()
      // $(selector)['fadeIn']()
      var target = that.element.find('.' + opt.activeCls).data('tab');
      $('#' + target).addClass(opt.activeCls);
      ele.siblings(opt.targetActive)[opt.animate](opt.duration);
      $(this).siblings(opt.targetActive).css('color','pink');
      ele.on('click', 'li', function() {
        var jqTab = $(this);
        var tab = jqTab.data('tab');
        tabHeader.removeClass(opt.activeCls);
        // tabContent.removeClass(opt.activeCls);
        $(this).parent().siblings('.tab.active').removeClass(opt.activeCls);
        $(tabContent).removeClass(opt.activeCls);
        tabContent.hide();
        jqTab.addClass(opt.activeCls);
        $('#' + tab).addClass(opt.activeCls);
        ele.siblings(opt.targetActive)[opt.animate](opt.duration);
      });
      // call $('[data-tabs]')['tabs']('addActive')
    },
    destroy: function() {
      // remove events
      // deinitialize
      $.removeData(this.element[0], pluginName);
    }
  };

  $.fn[pluginName] = function(options, params) {
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    show: false,
    onCallback: null,
    activeCls: 'active',
    targetActive: '.tab.active',
    animate: 'show',
    duration: 5000
  };

  $(function() {
    $('[data-' + pluginName + ']').on('customEvent', function() {
      // to do
    });

    $('[data-' + pluginName + ']')[pluginName]({
      key: 'custom'
    });
  });

}(jQuery, window));
