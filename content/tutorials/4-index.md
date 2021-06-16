---
title: "Creating a Raspberry Pi edgeEngine Cluster"
seo: "mimik, edge, edgeEngine, Raspberry Pi"
---


# Objective

The objective of this tutorial is to demonstrate how to get a group of Raspberry Pi computers up and running as a cluster of edgeEngine nodes using [Ansible](https://docs.ansible.com/) as the deployment automation mechanism.

# Intended Reader
The intended reader of this document is a person with programming or system administration skills. The reader should be comfortable with the concepts that go with basics of networking and computer configuration. Some familiarity creating bash scripts and operating a computer from the command line in a terminal window is expected.


# What You'll Be Doing

In this tutorial you'll be doing 3 things. They are as follows:

* **You'll set up a Raspberry Pi computer(s)** running the Raspian operating system. You'll be shown how to connect the Raspberry Pi to a wireless network. Also, you'll enable SSH on the Raspian system and then discover the IP address of the machine. You'll use the disovered IP address to do a test connection from the a computer running Ansible to the Raspberry Pi machine via `ssh`.
* **You'll add configuration information** to the project files that are relevant to executing the Ansible deployment of edgeEngine to one or many Raspberry Pi machines.
* **You'll execute the automation scripts** that will provision and install edgeEngine on the Raspberry Pi computer(s) via Ansible.


# What You'll Need

In order to get full benefit for this tutorial, you'll need  the following:

* A Linux, OSX or Windows computer with Ansible installed. You'll be using the Ansible computer to run the provisioning scripts provided as part of this tutorial.
	* You can [watch this video](https://youtu.be/p2a-_L_zNOo) to learn how to install Ansible on a `Ubuntu` system.
	* You can [watch this video](https://youtu.be/4sMFybv74Uo) to learn how to install Ansible on a `Windows 10` system.
	* You can [watch this video](https://youtu.be/M_2_QE9e2R0) to learn how to install Ansible on a `MAC/OSX` system.
	* For more information about how to install Ansible on your preferred machine go [here](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html).
* A number of Raspberry Pi computers to form the edgeEngine cluster. The preferable number of Raspberry Pi computers for forming a edgeEngine cluster is at least 3 machines. The section that follows, ***[Setting up the Raspberry Pi machines](#setting-up-the-raspberry-pi-machines)*** has a link to a video that describes how to set up the Raspberry Pi computers with the Raspian operating system.


# Getting the Computing Environment Up and Running With an Ansible Deployment

The sections that follow show you how to prepare and execute the provisioning of the Raspberry Pi machines to form a edgeEngine cluster. 


# Setting up the Raspberry Pi machines
This project requires that all the Raspberry Pi machines in your intended edgeEginer cluster be up and running under the Raspian Desktop operating system. The easiest way to do this is to use the [Raspberry Pi Imager](https://www.raspberrypi.org/blog/raspberry-pi-imager-imaging-utility/) program.

[This](https://youtu.be/ntaXWS8Lk34) 45 second video shows you how to create an image on a microSD card that you'll insert into the given Raspberry Pi device.

[Click to Watch Video](https://youtu.be/ntaXWS8Lk34)

Once the microSD card is inserted in the Raspberry Pi device and the machine is turned on, you'll be taken you through the final setup process to get Raspian up and running on the device. 

| What is the default username on a new Raspian installation? |
|----------------------------------------------------------------------------|
| The default username on a new Raspian installation is `pi`.       |

When setting up Raspberry Pi Desktop for the first time you'll be prompted to change the login password. When you change the password, make sure you are using a password that will be common to all machines that you intend to use in the edgeEngine cluster. Having a common password is very important for the proper execution of the Ansible automated provisioning scripts you will be executing in the following steps.

## Enabling wifi

In order to get the setup scripts provided with the project to interact the Raspberry Pi device, wifi needs to be enabled on the device. When you setup up Raspberry Pi Desktop for the first time, you will be prompted to connect to your wifi network. The wifi setup dialog is shown below in Figure 1.

|![wifi](https://raspberrytips.com/wp-content/uploads/2019/09/wifi.jpg?ezimgfmt=rs:300x210/rscb45/ng:webp/ngcb45) |
|----------------------------------------------------------------------------|
| **Figure 1: The wifi configuration dialog in Raspian Desktop setup**    |


The article found [here](https://raspberrytips.com/raspberry-pi-wifi-setup/) describes the wifi set up process. You find wife configuration instructions in the section of the article titled, **Configure Wi-Fi on Raspbian Desktop**.

## Ensuring SSH is enabled
To enable `ssh` on the given Raspbery Pi device, do the following:

**Step 1:** Click the Raspberry icon in the upper left of the Raspian Desktop UI as shown in Figure 2 below:

|![ssh 1](https://phoenixnap.com/kb/wp-content/uploads/2021/04/raspberry-pi-configuration-preferences-gui.png)|
|----------------------------------------------------------------------------|
| **Figure 2: Accessing the Raspberry Pi Configuration dialog from the Raspian Desktop** |


*Step 2:** Select Raspberry Pi Configuration from the Peferences submenu as shown n Figure 2 above.

**Step 3:** Select the option, **SSH** from the **Interfaces** tab of the **Raspberry Pi Configuration** dialog as shown in Figure 3 below.

|![ssh-02](https://phoenixnap.com/kb/wp-content/uploads/2021/04/raspberry-pi-configuration-interaface-gui.png)|
|----------------------------------------------------------------------------|
| **Figure 3: Enabling SSH from the Raspian Desktop  Raspberry Pi Configuration dialog**|

## Discovering the IP address of the machine

Once wifi is turned on and SSH is configured, you need to discover the IP address of the machine. To discover the IP address of a given Raspberry Pi machine, take the following steps:

**Step 1:** Open a terminal window by clicking the **terminal** icon, which is the fourth icon to the right in the top menu bar of the Raspbery Pi Desktop UI, as shown above in Figure 1.

**Step 2:** Type the following command into the terminal:

`ifconfig`

This will give you the IP address of the current machine. You'll get output similar to the following. 

```
eth0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether e4:5f:01:09:7c:4d  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 42829  bytes 18852669 (17.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 42829  bytes 18852669 (17.9 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.86.41  netmask 255.255.255.0  broadcast 192.168.86.255
        inet6 fe80::95e2:f9cd:4121:f792  prefixlen 64  scopeid 0x20<link>
        ether e4:5f:01:09:7c:4e  txqueuelen 1000  (Ethernet)
        RX packets 1262118  bytes 723231100 (689.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 799493  bytes 177223986 (169.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

Notice in the example above that the IP address for the machine is **`192.168.86.41`** under the **`wlan0`** section. `wlan0` indicates that the IP address is bound to the wireless network. Your IP address will be different.

If you do not see an IP address, run the following command to request an IP address from you wireless router:

`dhclient -v`

Then, run `ifconfig` again.

**SAVE THE IP ADDRESS! YOU'LL NEED IT LATER WHEN YOU CONFIGURE THE `hosts` file.**

## Giving the machine a unique name

The default installation process of Raspian gives every machine the same name. This can be a difficulty when working with many machines in a cluster of Raspberry Pi computers, particularly when debugging many machines at once via SSH. To make things easier, it's useful to give each machine in the cluster a unique name.

To give a machine a unique name, take the following steps:

**Step 1:** Go to a terminal window from within the Raspian Desktop UI,

**Step 2:** Execute the following command:

`sudo vi /etc/hostname`

The file, `/etc/hostname` will have the current name of the machine.


**Step 3:** Strike the `i` key to put the `vi` editor into edit mode.

**Step 4:** Change the content of `/etc/hostname` to a unique machine name using a serial naming convention. For example, if you plan to have 3 Raspberry Pi machines running in your cluster, you might name them:

```
pi1
pi2
pi3
```

In such a case you will change name in the `/etc/hostname` of the first machine to, `pi1`.

**Step 5:** Strike the `Esc` key to take the `vi` editor out of edit mode.

**Step 6:** Strike the `:` key get `vi` to accept the exit commands to come

**Step 7:** Strike the `wq` keys to save the changes and exit `vi`.

You are now ready to restart the machine

**Step 8:** To retart the machine, type the following in the terminal window:

`sudo reboot`.

## Testing the SSH connection

You'll test the SSH connection of the Raspberry Pi machine you've just configured from another machine on the network. To test the SSH connection, take the following steps:

**Step 1:** Go to a terminal in another machine on your network from which you can execute the `ssh` command.

**Step 2:** Type the following command in the terminal window of the second machine:

```
ssh <pi@PI_MACHINE_IP_ADDRESS>

```

**WHERE**

`pi` is the default user name of the Raspbery Pi machine you've just configured

`<PI_MACHINE_IP_ADDRESS>` is the IP address of the Raspberry Pi machine.

**DO NOT TYPE THE SYMBOLS:** `<` or `>`


**Step 3:** Since this will be your first login to the Raspberry Pi via `ssh` you'll be asked the following.

```
The authenticity of host '192.168.86.XX (192.168.86.XX)' can't be established.
ECDSA key fingerprint is SHA256:0syuqfaKHQWgllXeZR1hd2skhJaKE5m7qay2x6Mk9KM.
Are you sure you want to continue connecting (yes/no/[fingerprint])? 
```
Answer `yes`.

**Step 4:** You'll be prompted to provide the password for the user `pi`. Enter the password.

`pi@192.168.86.41's password: `

**BE ADVISED:** You change the password for the user `pi` when setting up the Raspian Desktop. Make sure you use that password.

If all is good you'll get a response to the login somewhat similar to the following:

```
Linux pi1 5.10.17-v7l+ #1414 SMP Fri Apr 30 13:20:47 BST 2021 armv7l

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Wed Jun  2 17:13:55 2021 from 192.168.86.XX

```
You have succesfully established an `ssh` connection to the machine you provisioned.

***Now, repeat this process for the other Raspberry Pi computers that you intended to include in the edgeEngine cluster.***

# Working with Ansible

The automated deployment process that provisions and assigns your Raspberry Pi computers to an edgeEngine cluster is executed using Ansible. Thus, you'll need a computer with Ansible installed from at least version `2.9`. Also, before running the automated deployment scripts, you'll need to setup `ssh` access from the Ansible machine to each of the Raspberry Pi computers that you intend to add to the edgeEnginer cluster.

The following sections describe how to verify that the required version of Ansible is running and how to enable `ssh` access to the Raspberry Pi computers from the Ansible machine. 

## Checking the version

To check your version of Ansible runing on your machine, type the following

`ansible --version`

You'll get output similar to the following:

```
ansible 2.9.6
  config file = /etc/ansible/ansible.cfg
  configured module search path = ['/home/reselbob/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /usr/lib/python3/dist-packages/ansible
  executable location = /usr/bin/ansible
  python version = 3.8.5 (default, May 27 2021, 13:30:53) [GCC 9.3.0]
```

***Again, you must be running a version of Ansible 2.9 or later.***


## Giving the Ansible machine `ssh` access to the Raspberry Pi computers

This installation process will implement access from the Ansible host to the Rasperry Pi computers using usename/password authentication over `ssh`.

**Be ADVISED:** Using a usename/password pair to faciliate authentication under Ansible is acceptable for educational and experimental purposes. However, you should avoid this technique in a production setting.

As mentioned above, in order for the Ansible host to access all the Raspberry Pi computers you need to `ssh` into each Raspberry Pi computer from your Ansible host. The first time you `ssh` into each of the Raspberry Pi computers you will be asked to answer `yes` or `no` to create a ECDA key fingerprint for the `ssh` connection, like so:

```
The authenticity of host '192.168.86.38 (192.168.86.38)' can't be established.
ECDSA key fingerprint is SHA256:IyBNnFpCKoPCX3VQwXwjI06Z5RAfjQOh3rswSAx8DOc.
Are you sure you want to continue connecting (yes/no/[fingerprint])?

```

When presented with the message, answer `yes`.

Now, login to each Raspberry PI machine using`ssh` from the machine running Ansible.

# Configuring the provisioning scripts
In this section you'll learn how to configure the files that are necessary for Ansible to install edgeEngine the Raspberry Pi computer(s).

First, we'll look at the structure of the files and directories that make up the deployment automation process. Then, we'll describe how to configure the relevant configuration files.

### Getting the Project Files

The project files that contain the deployment scripts, playbooks and artifacts for deployment to the cluster of Raspberry Pi mchines are stored on GitHub [here](https://github.com/mimikgit/mimik-ansible/tree/main/ansible-pi). You will need to download the files onto the machine you are using to run Ansbile.

To download the project files, execute the following command on the machine that is running Ansible.

`git clone https://github.com/mimikgit/mimik-ansible.git`

Then once the project is cloned from the GitHub repository, navigate to the working directory for the sub-project, like so

`cd ./ansible-mimik/ansible-pi` 

You are now ready to configure the files necessary to deploy edgeEngine using Ansbible.


## Understanding the Structure of the Project

The listing below shows the files and directories the make up the deployment automation process.

The folder `ansible/tasks` contains the files that Ansible uses to execute particular parts of the provisiong process. 

The file, `edge-installer/edgeSDK-raspbian-setup-v2.2.1.tar` is the a .`tar` file that contains the components that make up edgeEngine. You don't have to do anything with this file. Ansible will use it in the provisioning process.

The directory `sample-automated-deployment` contains the file that have the configuration information necessary for the deployment process to execute under Ansible. You'll configure 2 files in  the directory, `sample-automated-deployment`. These files you'll configure are:

* deploy.sh
* hosts

```
ansible-pi
│   ├── ansible
│   │   └── tasks
│   │       ├── get-edge-access-token.yml
│   │       ├── install-dependency.yml
│   │       └── install-edge.yml
│   ├── edge-installer
│   │   └── edgeSDK-raspbian-setup-v2.2.1.tar
│   ├── readme.md
│   └── sample-automated-deployment
│       ├── ansible.cfg
│       ├── deploy.sh
│       ├── gateway.yml
│       └── hosts

```

The sections that follow describe how you are to configure the files:

* deploy.sh
* hosts


## Configuring the `deploy.sh` file

The file, `sample-automated-deployment/deploy.sh` is the bash script that kicks of the edgeEngine deployment in it's entirety. The contents of `deploy.sh` are shown below:

```

# Add your Client ID
export CLIENT_ID=<YOUR_CLIENT_ID>

# Add your Developer Token ID
export DEVELOPER_ID_TOKEN=<YOUR_DEVELOPER_TOKEN_ID>

export EDGE_INSTALLER=edgeSDK-raspbian-setup-v2.2.1.tar


# Add the username and password for the Raspberry Pi machines.
#
# Make that each Raspberry Pi machine in your cluster
# is configured the same username and password pair.
#
# The default username/password pair supplied during the
# installation of Raspberry Pi Desktop is pi/raspberry
ansible-playbook ./gateway.yml -i ./hosts  --extra-vars "ansible_user=<USERNAME> ansible_password=<PASSWORD>"

```

As you see from the listing above, you are going to need to add 4 pieces of information in `deploy.sh`. The items you need to add are:

* `Client ID`
* `Developer Token ID`
* The `username` that is common to all the Raspberry Pi machines you want to add to the edgeEngine cluster
* The `password` associated with the username, that is common to all the Raspberry Pi machines you want to add to the edgeEngine cluster. You created the password when set up Raspian Desktop on the given Raspberry Pi machine.

The following sections show you how to get the `Client ID`  and your `Developer Token ID`.

### Getting into the mimik Developer Portal

Create or sign into your account on the mimik Developer Portal.

|![Developer Portal Login](https://developer.mimik.com/wp-content/uploads/2020/10/signup.png)|
|----------------------------------------------------------------------------|
| **Figure 4: The login dialog to the mimik Developer Portal**|


Create or choose a project on the mimik Project page.

|![Choose a project](https://developer.mimik.com/wp-content/uploads/2021/01/Screen-Shot-2020-12-14-at-3.15.08-PM.png)|
|----------------------------------------------------------------------------|
| **Figure 5: The mimik Project page**|


### Getting the `Client ID`

Copy the `Client ID` from the the project detail dialog. (See Figure 6 below.)

|![Project Detail dialog 1](https://developer.mimik.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-14-at-3.22.08-PM.png)|
|----------------------------------------------------------------------------|
| **Figure 6: The project detail dialog**|

Paste the `Client ID` into the file, `deploy.sh`, at the `export CLIENT_ID` statement ...

`export CLIENT_ID=<YOUR_CLIENT_ID>`

... substituting the value of `Client ID` in place of the term `<YOUR_CLIENT_ID>`

Save the file, `deploy.sh`.


### Getting the `Developer Token ID`

Take a look at Figure 6 above. Notice the green button labeled, `Get ID Token`. Click it.

This will generate an `ID Token` automatically. `ID Token` is another name for the `Developer Token ID`.

Copy the value generated for the `ID Token` and paste it into the file `deploy.sh`, at the `export DEVELOPER_ID_TOKEN` statement ...

`export DEVELOPER_ID_TOKEN=<YOUR_DEVELOPER_TOKEN_ID>`

... substituting the value of the `ID Token` in place of the term `YOUR_DEVELOPER_TOKEN_ID>`

Save the file, `deploy.sh`.

### Setting the `username` and `password` values.

Finally, we need to provide the `username` and `password` common to all the Raspberyy Pi machines so that Ansible can get into them to do provisioning.

In the file, `deploy.sh` take a look at the line:

`
installation of Raspberry Pi Desktop is pi/raspberry
ansible-playbook ./gateway.yml -i ./hosts  --extra-vars "ansible_user=<USERNAME> ansible_password=<PASSWORD>"
`

Substitute the term, `<USERNAME>` with the the `username` common to all the Raspberyy Pi machines.

Substitute the term, `<PASSWORD>` with the the `password` common to all the Raspberyy Pi machines.

**MAKE SURE YOU DELETE THE SYMBOLs `<` and `>`.**

Save the file, `deploy.sh`.

The following listing shows what a properly configure `deploy.sh` file looks like. Please be advised that all tokens have been obfuscated for security reasons.

```

# Add your Client ID
export CLIENT_ID=llxxx6xbx7d-1121-41z5-0137-1p7pxxxxxxvqr

# Add your Developer Token ID
export DEVELOPER_ID_TOKEN=xyJxbGciOiJSUxI1xiIsIxR5cCI6IkpXxCIsImtpxCI6Ijx2RG45aF9LSxxxTkJxxxxubUxFd0xfUxxpQTkxxxYyx1FTQUxRdxl5T2sifQ.xyJxdxIiOiIyODx0MxA0ODA1MTkyxjAxxjAxIixixx1xaxxiOiIyODx0MxA0ODA1MTkyxjAxxjAxQGx4Yx1xbGUuY29tIixiYXxkIjoiYmI2xmJxx2QtxjMyMS00MxM1LxFjMxctMxx3YTxxOxx0YxMxIixixXxxIjoxxjI1MxcxOTA0LCJpYXQiOjx2MjI3xxg5MDQsImlxcyI6Imx0dxBxOi8xbxlkLm1pbxlrMxYxLmxxbSJ9.xmrTQIIOxPQjyfQCbRLuxxs4Js0A3yxAGx0Rs93xtxMrJDm1OqLx5qx0xAxaGpxyJ3xQxXx62B7ixxjGK8_ug4FxtMGKObxmxI0PixXt--JixUUds4LuSaUbx_xqxpKxGx8pFbyIxKoJO-xS4xr1LJp0pOuX3qKtBxr2x_xoLaXqdSJxxr3xxQqTL-uF9O4lKJx4xppx9URgApJxxx2RdkxYxKxrXcGrM6FxJAp9Dxm8Xx6txQTpxxLDXXaxqYxI5mGmQxF7rjxxJxbxpMQYY8dkdxpxxx_bfSjBsxG8fxjJStY0x3M30bt5Kui1TARc5f3TxLBxxSoxxsBjxgyLGx

export EDGE_INSTALLER=edgeSDK-raspbian-setup-v2.2.1.tar


# Add the username and password for the Raspberry Pi machines.
#
# Make that each Raspberry Pi machine in your cluster
# is configured the same username and password pair.
#
# The default username/password pair supplied during the
# installation of Raspberry Pi Desktop is pi/raspberry
ansible-playbook ./gateway.yml -i ./hosts  --extra-vars "ansible_user=pi ansible_password=password"

```

Next, we need to configure the `hosts` file.

## Configuring the `hosts` file

The `hosts` file describes the `username` and `IP address` of each Raspberry PI machine that's to be provisioned by provisioned by Ansible. The listing below is the contents of the `hosts` file that ships with this project. You'll need to modify the file by providing the `username` and `IP address` for each machine that's to be part of the edgeEngine cluster. 

```
# Uncomment each line and provide the user name that is common
# to all Raspberry Pi computers and the unique IP address for each
# machine that needs to be provisioned by Ansible.

[pi]
#pi1 ansible_host=<username>@<IP_ADDRESS> ansible_port=22
#pi2 ansible_host=<username>@<IP_ADDRESS> ansible_port=22
#pi3 ansible_host=<username>@<IP_ADDRESS> ansible_port=22
```
**BE ADVISED** that the `username` needs to be one that is common to all the Raspberry Pi computers you're provisioning. As you might recall, you declared the common `username` and `password` pair in the `deploy.sh` file you configured in the previous section.

You'll find the `hosts` to edit at the filepath:

```
./ansbile-pi/sample-automated-deployment/hosts
```
The listing below shows an example of a completed `hosts` file. The IP addresses of your installation will be different. You'll uses the IP addresses that are special for each of the Raspberry Pi machines you created earlier.

```

[pi]
pi1 ansible_host=pi@192.168.86.38 ansible_port=22
pi2 ansible_host=pi@192.168.86.39 ansible_port=22
pi3 ansible_host=pi@192.168.86.41 ansible_port=22
```

# Executing the Deployment

Once the `deploy.sh` and `hosts` files have been configured, you can excute the deployment under Ansible. To execute the deployment of edgeEngine to the Raspberry Pi machines, take the following steps:

**Step 1:** From a terminal window within the computer you are using to run Ansible, navigate to the working directory for the project code you cloned from GitHub.

`cd ./ansible-pi/sample-automated-deployment`

**Step 2:** Execute the command below in the terminal window to navigate to the directory that has the deployment script, `deploy.sh`.

`cd ./ansible-pi/sample-automated-deployment`

**Step 3:** Execute the following command from within the directory, `./ansible-pi/sample-automated-deployment`


```
sudo sh deploy.sh
```

You'll be executing the command as `sudo` so the system will as you for your login password for the Ansible computer that you are running the script on.


# Confirming the Deployment

Login to first Raspberry Pi computer in your edgeEngine cluster via `ssh` from a terminal window within the computer you are using to run Ansible. Then execute the following command from within the terminal:

```
mimik-edge-cli account get-me

```

If the deployment is successful you will get output simmilar to the following. Be advised the value for `accountId` has be obfuscated for security reasons. Also, the other values in the output will vary on your machines.

```
accountId:         XX14304X0519XX01X00
linkLocalIp:       192.168.86.39
name:              pi1
nodeId:            a95c7f6035b7d00c12fdf359a7a00f41ac803a521f313f39c5fb17af
supernodeTypeName: _mk-v12-4996e4c2442cc796f2c0ddb4e5e1627d._tcp
version:           v2.2.1

```

Now, `ssh` into the other Raspberry Pi machines in your edgeEngine cluster and run the command `mimik-edge-cli account get-me` as you did above. You should get output similar that shwon above.

| **Want to learn about how edgeEngine works under the covers?** |
|----------------------------------------------------------------------------|
| [Watch this 4:27 minute video](https://youtu.be/-S-R7MWRpaI) that explains the details of edgeEngine.|
