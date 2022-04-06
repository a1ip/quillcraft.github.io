(function() {
	const feed = document.getElementById('feed')
	const list = Array.from(feed.children)

	const years = [...new Set(list.map(d => d.dataset.year))]

	years.forEach(year => {
		const divYear = document.createElement('div')
		divYear.classList.add('year')
		divYear.dataset.value = year

		const postsByYear = list.filter(d => d.dataset.year === year)
		const months = [...new Set(postsByYear.map(d => d.dataset.month))]

		months.forEach(month => {
			const divMonth = document.createElement('div')
			divMonth.classList.add('month')
			divMonth.dataset.value = month

			const postsByMonth = postsByYear.filter(d => d.dataset.month === month)
			const days = [...new Set(postsByMonth.map(d => d.dataset.day))]

			days.forEach(day => {
				const divDay = document.createElement('div')
				divDay.classList.add('day')
				divDay.dataset.value = day

				const postsByDay = postsByMonth.filter(d => d.dataset.day === day)
				const posts = postsByDay

				posts.forEach(post => {
					divDay.appendChild(post)
				})

				divMonth.appendChild(divDay)
			})

			divYear.appendChild(divMonth)
		})

		feed.appendChild(divYear)
	})
})()
