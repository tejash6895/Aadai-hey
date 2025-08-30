document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-slideshow .slides').forEach(slides => {
    const interval = parseInt(slides.dataset.interval || '6000', 10);
    let i = 0;
    const all = [...slides.children];
    if (all.length <= 1) return;
    all.forEach((s, idx)=> s.style.position = 'absolute');
    function show(n){
      all.forEach((s, idx)=> s.style.opacity = (idx === n ? 1 : 0));
    }
    show(0);
    setInterval(()=>{ i = (i+1) % all.length; show(i); }, interval);
  });

  document.querySelectorAll('.tabs-section').forEach(section => {
    const pills = section.querySelectorAll('.pill');
    const panels = section.querySelectorAll('.tab-content');
    function activate(idx){
      pills.forEach((p,i)=> p.classList.toggle('is-active', i === idx));
      panels.forEach((p,i)=> p.hidden = i !== idx);
    }
    pills.forEach((p,i)=> p.addEventListener('click', () => activate(i)));
    if (pills.length) activate(0);
  });
});
