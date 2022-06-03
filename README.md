# Simple To do list API
### - how to install?
> 1. clone repozitory
`git clone https://github.com/Fulldroper/toDoListAPI.git`
> 2. open folder
`cd toDoListAPI` 
### - how to start server?
> 1. install packages
`npm i`
> 2. start server
`nmp start`
### - How to use?

Scheme of reqest.
- Get all tasks, method = GET path = `/`
- Add task, method = PUL path = `/` body = `{value: "text"}`
- Remove task, method = delete path = `/:id`
- Change text of task, method = patch path = `/:id` body = `{value: "text"}`
- Change status of task, method = patch path = `/:active or :inactive/:id`
  
### - how set database?
> 1. Open file `auth_example.json`
> 2. Change `to your db`
> 3. Save changes
> 4. Rename file `auth_example.json` to `auth.json`

More questions? [mail me](mailto://full_droper.pm.me)
