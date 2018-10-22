// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'exp3',
//   note: 'exp3 note',
//   amount: 300,
//   createdAt: 3
// })

// database.ref('notes/-LPNlm_cXtCWup0tr4Uh').remove()

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Native, Angular'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   }, (e) => {
//     console.log('Error with data fetching', e)
//   })

// database.ref().set({
//   name: 'Me',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'US'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed.', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

// database.ref()
// .remove()
// .then(() => {
//   console.log('data was removed')
// }).catch((e) => {
//   console.log('Did not remove data: ', e)
// })