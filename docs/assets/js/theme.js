// Apply the saved preference before styles load; storage is optional.
try {const saved=localStorage.getItem('mehedi-theme'); if(saved==='light'||saved==='dark') document.documentElement.dataset.theme=saved; else if(window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme='dark';} catch (_) {}
