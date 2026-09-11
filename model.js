globalThis.MockupModel={
 visible(posts,{kind='all',funnel='all',order='latest',collection=null,saved=[]}={}){return posts.filter(p=>p.kind!=='Story'&&(kind==='all'||p.kind===kind)&&(funnel==='all'||p.funnel===funnel)&&(!collection||(collection==='saved'?saved.includes(p.day):collection.includes(p.day)))).sort((a,b)=>order==='latest'?b.day-a.day:a.day-b.day);},
 step(index,delta,length){return length?Math.max(0,Math.min(length-1,index+delta)):0;},
 storyFrames(posts){return posts.filter(p=>p.kind==='Story').flatMap(p=>p.images.map((src,i)=>({day:p.day,index:i,src,total:p.images.length,topic:p.topic})));}
};
