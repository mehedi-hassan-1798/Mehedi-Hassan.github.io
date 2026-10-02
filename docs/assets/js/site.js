(() => {
  const root=document.documentElement, toggle=document.querySelector('.theme-toggle');
  const label=()=>{const dark=root.dataset.theme==='dark';toggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');toggle.title=dark?'Switch to light theme':'Switch to dark theme';};
  label();toggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('mehedi-theme',root.dataset.theme);}catch(_){}label();});
  const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('#main-nav');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.focus();}});
  const search=document.querySelector('#paper-search');
  if(search){
    document.querySelector('.publication-tools').hidden=false;
    let type='All';const papers=[...document.querySelectorAll('.publication')], buttons=[...document.querySelectorAll('[data-filter]')];
    const update=()=>{let count=0;const query=search.value.trim().toLowerCase();papers.forEach(p=>{const text=[p.querySelector('h3').textContent,p.querySelector('.authors').textContent,p.querySelector('.venue').textContent,p.querySelector('.venue-label').textContent].join(' ').toLowerCase();const show=(type==='All'||p.dataset.type===type)&&text.includes(query);p.hidden=!show;if(show)count++;});document.querySelectorAll('.year-group').forEach(g=>{g.hidden=![...g.querySelectorAll('.publication')].some(p=>!p.hidden);});document.querySelector('#paper-count').textContent=count+' publication'+(count===1?'':'s');document.querySelector('#no-results').hidden=count!==0;};
    search.addEventListener('input',update);
    buttons.forEach(b=>b.addEventListener('click',()=>{type=b.dataset.filter;buttons.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b));});update();}));
  }
})();
