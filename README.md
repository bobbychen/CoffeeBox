# CoffeeBox

##pre start 

####install node
`wget https://nodejs.org/dist/v8.11.3/node-v8.11.3.tar.gz`

`tar -zxvf node-v8.11.3.tar.gz -C node` 

`add /node/bin/ to PATH`

check:
**node -v**

####install git
 `yum install git`
 
####install mongodb

[install mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)


####Clone Project
`git clone https://github.com/bobbychen/CoffeeBox.git`

`npm install`
 
####Create system service

create coffee-box.service file under /etc/systemd/system directory

edit it:

```
[Unit]
Description=CoffeeBox Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/src/node/bin/node /path/to/CoffeeBox/index.js 
Restart=on-abort

[Install]
WantedBy=multi-user.target
```

**reload system services**: `systemctl deamon-reload`

**start service**: `systemctl start coffee-box`

**check service**: `systemctl status coffee-box`

**stop service**: `systemctl stop coffee-box`


### import data


**import coffee category**:    
```
cd /home/centos/CoffeeBox/utils    
node ./coffee-category-loader.js
```

**import coffee**: 
```
cd /home/centos/CoffeeBox/utils

node ./coffee-loader.js
```