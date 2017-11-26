# README for Vagrant File
This README is aimed for team members to be able to use vagrant to provision VM's locally for use of this project.
This vagrantfile installs all necessary tools required for creating this project dev environment.
It installs nodeJS, npm, ansible, Bot-Ansible module, adds Bot Token into the spawned VM's Environment Variable.




## Steps to use this Vagrantfile:
1. Make sure you have Virtual Box installed.
2. Make sure you have Vagrant installed.
3. Please fetch the master branch for the vagrant file.
4. Run 'vagrant up'
5. Run 'vagrant ssh'
6. If you make any changes in the Vagrant file, then make sure you run 'vagrant reload --provision'  


