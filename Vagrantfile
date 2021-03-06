# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.post_up_message = "Achievements VM - Provisionado com o Ansible"

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = true
 
    # Customize the amount of memory on the VM:
    vb.memory = "4096"
  end

  require 'rbconfig'
  is_windows = (RbConfig::CONFIG['host_os'] =~ /mswin|mingw|cygwin/)

  if is_windows
    # Provisioning configuration for shell script.
    config.vm.provision "shell" do |sh|
      sh.path = "provisioning/windows.sh"
      sh.args = "provisioning/ansible/playbook.yml"
    end
  else
    # Provisioning configuration for Ansible (for Mac/Linux hosts).
    config.vm.provision "ansible" do |ansible|
      ansible.playbook = "provisioning/ansible/playbook.yml"
      ansible.verbose = 'v'
    end
  end
end

