import{_ as n,c as r,o as e,a}from"./app.2cd48e21.js";const _='{"title":"\u5E38\u7528\u7B97\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6392\u5E8F","slug":"\u6392\u5E8F"},{"level":3,"title":"\u5192\u6CE1\u6392\u5E8F","slug":"\u5192\u6CE1\u6392\u5E8F"},{"level":3,"title":"\u9009\u62E9\u6392\u5E8F","slug":"\u9009\u62E9\u6392\u5E8F"},{"level":3,"title":"\u63D2\u5165\u6392\u5E8F","slug":"\u63D2\u5165\u6392\u5E8F"}],"relativePath":"algorithm/index.md","lastUpdated":1682067665518}',i={},l=a(`<h1 id="\u5E38\u7528\u7B97\u6CD5" tabindex="-1">\u5E38\u7528\u7B97\u6CD5 <a class="header-anchor" href="#\u5E38\u7528\u7B97\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u6392\u5E8F" tabindex="-1">\u6392\u5E8F <a class="header-anchor" href="#\u6392\u5E8F" aria-hidden="true">#</a></h2><h3 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1">\u5192\u6CE1\u6392\u5E8F <a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a></h3><ul><li><p>\u6BD4\u8F83\u76F8\u90BB\u7684\u5143\u7D20\u3002\u5982\u679C\u7B2C\u4E00\u4E2A\u6BD4\u7B2C\u4E8C\u4E2A\u5927\uFF0C\u5C31\u4EA4\u6362\u5B83\u4EEC\u4E24\u4E2A\uFF1B</p></li><li><p>\u5BF9\u6BCF\u4E00\u5BF9\u76F8\u90BB\u5143\u7D20\u4F5C\u540C\u6837\u7684\u5DE5\u4F5C\uFF0C\u4ECE\u5F00\u59CB\u7B2C\u4E00\u5BF9\u5230\u7ED3\u5C3E\u7684\u6700\u540E\u4E00\u5BF9\uFF0C\u8FD9\u6837\u5728\u6700\u540E\u7684\u5143\u7D20\u5E94\u8BE5\u4F1A\u662F\u6700\u5927\u7684\u6570\uFF1B</p></li><li><p>\u9488\u5BF9\u6240\u6709\u7684\u5143\u7D20\u91CD\u590D\u4EE5\u4E0A\u7684\u6B65\u9AA4\uFF0C\u9664\u4E86\u6700\u540E\u4E00\u4E2A\uFF1B</p></li><li><p>\u91CD\u590D\u6B65\u9AA4 1~3\uFF0C\u76F4\u5230\u6392\u5E8F\u5B8C\u6210\u3002</p></li></ul><h4 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h4><div class="language-"><pre><code>function bubbleSort(arr) {

    var len = arr.length;

    for (var i = 0; i &lt; len - 1; i++) {

        for (var j = 0; j &lt; len - 1 - i; j++) {

            if (arr[j] &gt; arr[j+1]) {       // \u76F8\u90BB\u5143\u7D20\u4E24\u4E24\u5BF9\u6BD4

                var temp = arr[j+1];       // \u5143\u7D20\u4EA4\u6362

                arr[j+1] = arr[j];

                arr[j] = temp;

            }

        }

    }

    return arr;

}
</code></pre></div><h3 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1">\u9009\u62E9\u6392\u5E8F <a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a></h3><p>n \u4E2A\u8BB0\u5F55\u7684\u76F4\u63A5\u9009\u62E9\u6392\u5E8F\u53EF\u7ECF\u8FC7 n-1 \u8D9F\u76F4\u63A5\u9009\u62E9\u6392\u5E8F\u5F97\u5230\u6709\u5E8F\u7ED3\u679C\u3002\u5177\u4F53\u7B97\u6CD5\u63CF\u8FF0\u5982\u4E0B\uFF1A</p><ul><li><p>\u521D\u59CB\u72B6\u6001\uFF1A\u65E0\u5E8F\u533A\u4E3A R[1..n]\uFF0C\u6709\u5E8F\u533A\u4E3A\u7A7A\uFF1B</p></li><li><p>\u7B2C i \u8D9F\u6392\u5E8F(i=1,2,3\u2026n-1)\u5F00\u59CB\u65F6\uFF0C\u5F53\u524D\u6709\u5E8F\u533A\u548C\u65E0\u5E8F\u533A\u5206\u522B\u4E3A R[1..i-1]\u548C R(i..n\uFF09\u3002\u8BE5\u8D9F\u6392\u5E8F\u4ECE\u5F53\u524D\u65E0\u5E8F\u533A\u4E2D-\u9009\u51FA\u5173\u952E\u5B57\u6700\u5C0F\u7684\u8BB0\u5F55 R[k]\uFF0C\u5C06\u5B83\u4E0E\u65E0\u5E8F\u533A\u7684\u7B2C 1 \u4E2A\u8BB0\u5F55 R \u4EA4\u6362\uFF0C\u4F7F R[1..i]\u548C R[i+1..n)\u5206\u522B\u53D8\u4E3A\u8BB0\u5F55\u4E2A\u6570\u589E\u52A0 1 \u4E2A\u7684\u65B0\u6709\u5E8F\u533A\u548C\u8BB0\u5F55\u4E2A\u6570\u51CF\u5C11 1 \u4E2A\u7684\u65B0\u65E0\u5E8F\u533A\uFF1B</p></li><li><p>n-1 \u8D9F\u7ED3\u675F\uFF0C\u6570\u7EC4\u6709\u5E8F\u5316\u4E86</p></li></ul><h4 id="\u4EE3\u7801-1" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-1" aria-hidden="true">#</a></h4><div class="language-"><pre><code>
function selectionSort(arr) {

    var len = arr.length;

    var minIndex, temp;

    for (var i = 0; i &lt; len - 1; i++) {

        minIndex = i;

        for (var j = i + 1; j &lt; len; j++) {

            if (arr[j] &lt; arr[minIndex]) {    // \u5BFB\u627E\u6700\u5C0F\u7684\u6570

                minIndex = j;                // \u5C06\u6700\u5C0F\u6570\u7684\u7D22\u5F15\u4FDD\u5B58

            }

        }

        temp = arr[i];

        arr[i] = arr[minIndex];

        arr[minIndex] = temp;

    }

    return arr;

}
</code></pre></div><h3 id="\u63D2\u5165\u6392\u5E8F" tabindex="-1">\u63D2\u5165\u6392\u5E8F <a class="header-anchor" href="#\u63D2\u5165\u6392\u5E8F" aria-hidden="true">#</a></h3><ul><li><p>\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u8BE5\u5143\u7D20\u53EF\u4EE5\u8BA4\u4E3A\u5DF2\u7ECF\u88AB\u6392\u5E8F\uFF1B</p></li><li><p>\u53D6\u51FA\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5728\u5DF2\u7ECF\u6392\u5E8F\u7684\u5143\u7D20\u5E8F\u5217\u4E2D\u4ECE\u540E\u5411\u524D\u626B\u63CF\uFF1B</p></li><li><p>\u5982\u679C\u8BE5\u5143\u7D20\uFF08\u5DF2\u6392\u5E8F\uFF09\u5927\u4E8E\u65B0\u5143\u7D20\uFF0C\u5C06\u8BE5\u5143\u7D20\u79FB\u5230\u4E0B\u4E00\u4F4D\u7F6E\uFF1B</p></li><li><p>\u91CD\u590D\u6B65\u9AA4 3\uFF0C\u76F4\u5230\u627E\u5230\u5DF2\u6392\u5E8F\u7684\u5143\u7D20\u5C0F\u4E8E\u6216\u8005\u7B49\u4E8E\u65B0\u5143\u7D20\u7684\u4F4D\u7F6E\uFF1B</p></li><li><p>\u5C06\u65B0\u5143\u7D20\u63D2\u5165\u5230\u8BE5\u4F4D\u7F6E\u540E\uFF1B</p></li><li><p>\u91CD\u590D\u6B65\u9AA4 2~5</p></li></ul><h4 id="\u4EE3\u7801-2" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801-2" aria-hidden="true">#</a></h4><div class="language-"><pre><code>
function insertionSort(arr) {

    var len = arr.length;

    var preIndex, current;

    for (var i = 1; i &lt; len; i++) {

        preIndex = i - 1;

        current = arr[i];

        while (preIndex &gt;= 0 &amp;&amp; arr[preIndex] &gt; current) {

            arr[preIndex + 1] = arr[preIndex];

            preIndex--;

        }

        arr[preIndex + 1] = current;

    }

    return arr;

}
</code></pre></div>`,15),t=[l];function d(p,h,c,o,s,u){return e(),r("div",null,t)}var f=n(i,[["render",d]]);export{_ as __pageData,f as default};
