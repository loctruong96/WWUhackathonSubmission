# hackathon2019frondtend

## Installing nodejs for the first time.

If you have nodejs and npm installed, you can skip to the RUN PROJECT section below.

If you don't have node installed, you'll need to install it to run this project.  Two commands can help test this quickly.
```bash
node --version
npm --version
```
Below is an example of my node and npm setup.  If you run the node or npm at command line and get an error, you'll need to install.
```bash
jonny@ubuntu:~$ node --version
v11.0.0
jonny@ubuntu:~$ npm --version
6.4.1
```

### Quick Guide for install nodejs on Linux

Full Guide for issues/other OS: https://github.com/creationix/nvm

Run the following command to download the nvm files from Github:

`curl https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install.sh`

Then, run the following to install

`sh install.sh`

At this point, may need to close and reopen terminal, or run this command:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
```

Then run:

`nvm install stable`


## RUN PROJECT

Clone this repo.

Open the project directory and run `npm install` from the command line.  This will install library dependencies from package.json.

Once the install is complete, run `npm run serve`.  You should see something like below, and be able to see the project running in a web browser at http://localhost:8080/.  

```
  App running at:
  - Local:   http://localhost:9090/
```

Everything past this point is specific to development of the project and is not needed to run.

## Special commands
Run local server
```
serve -s dist
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
