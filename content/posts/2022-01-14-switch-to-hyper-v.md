---
title: Switch to Hyper-V
date: 2022-01-14
---

In my previous post, I've installed minikube and Kubernetes CLI on my laptop and used VirtualBox as a virtualization driver. But I had to find out that it can sometimes hang on startup, and it can take a lot of time to make it work again.

If you worked with VirtualBox as long as I did, you're probably familiar with Hyper-v and VirtualBox not liking each other. Fortunately, VirtualBox has supported hyper-v since version 6.0. So today, I'm going to give it a try.

## Verify version VirtualBox version

From the command line:

```
PS C:\Windows\system32> VBoxManage.exe --version
6.1.30r148432
```
![](/images/20230415140102.png)

Or from Help>About VirtualBox


## Enable Hyper-v

Next, I'm going to enable the Windows feature.

![](/images/20230415140141.png)
![](/images/20230415140154.png)

This is also an excellent opportunity to enable Windows Sandbox as well. Now hit ok and reboot.

## Check if anything broke

If everything when ok, we should see

![](/images/20230415140219.png)

And we should even run our existing boxes as well.

![](/images/20230415140238.png)

## Create a new minikube cluster

If we try to start our minikube at this point, it will still run in VirtualBox. So to prevent this from happening, I'm going to delete it and create a new one.

```
PS C:\Windows\system32> minikube delete
* Stopping node "minikube"  ...
* Deleting "minikube" in hyperv ...
* Removed all traces of the "minikube" cluster.
PS C:\Windows\system32> minikube start
* minikube v1.24.0 on Microsoft Windows 10 Pro 10.0.19044 Build 19044
* Automatically selected the hyperv driver. Other choices: virtualbox, ssh
* Starting control plane node minikube in cluster minikube
* Creating hyperv VM (CPUs=2, Memory=6000MB, Disk=20000MB) ...
* Preparing Kubernetes v1.22.3 on Docker 20.10.8 ...
  - Generating certificates and keys ...
  - Booting up control plane ...
  - Configuring RBAC rules ...
* Verifying Kubernetes components...
  - Using image gcr.io/k8s-minikube/storage-provisioner:v5
* Enabled addons: storage-provisioner, default-storageclass
* Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
```

It was far faster to start than it was with VirtualBox. So now it's time to lunch the dashboard.

```
PS C:\Windows\system32> minikube dashboard
* Enabling dashboard ...
  - Using image kubernetesui/dashboard:v2.3.1
  - Using image kubernetesui/metrics-scraper:v1.0.7
* Verifying dashboard health ...
* Launching proxy ...
* Verifying proxy health ...
* Opening http://127.0.0.1:54276/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/ in your default browser...
```
![](/images/20230415140345.png)

## Closing thoughts

I made a couple of reboots and reinstalls for my minikube and have not experienced any hangups yet. And using Hyper-V now gives me an opportunity to try out [Windows Sandbox](https://learn.microsoft.com/en-us/windows/security/threat-protection/windows-sandbox/windows-sandbox-overview) and [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/) as well. Another great bonus is non of my previous boxes broke during this process.