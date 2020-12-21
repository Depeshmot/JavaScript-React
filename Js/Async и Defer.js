Async - мы должны быть точно уверены что мой скрипт не зависит от DOM структуры, мне все равно сформировалась она или нет, также не должен  зависеть от других скриптов, как только он загрузился
он сразу выполнился.

Defer - 



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
    
}

loadScript('js/test.js');
loadScript('js/some.js');

