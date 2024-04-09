document.getElementById('solve').onclick = function () {
	const p = document.getElementById('p').value
	const r = document.getElementById('r').value
	const t = document.getElementById('t').value
	/* const si = document.getElementById('si').value */
	let simpleinterestformula = (p * r * t) / 100
	return (document.getElementById(
		'ans'
	).innerHTML = `Answer : X = ${simpleinterestformula} `)
	/* let x = (si * 100) / (p * r)
	let y = (si * 100) / (r * t)
	let z = (si * 100) / (p * t)
	if(si == '' && p,r,t != ''){
	return (document.getElementById(
		'ans'
	).innerHTML = `Answer : X = ${w} `)
    }else if(r == '' && si,p,t != '') {
        return (document.getElementById(
					'ans'
				).innerHTML = `Answer : X = ${z} `)
    }else if ((p == '' && si, r, t != '')) {
			return (document.getElementById('ans').innerHTML = `Answer : X = ${y} `)
		} else if ((t == '' && si, r, p != '')) {
			return (document.getElementById('ans').innerHTML = `Answer : X = ${x} `)
		} else {
			return (document.getElementById('ans').innerHTML = `invalid operation `)
		} */
}
