#! /bin/bash

echo "merhabalar"

# GİT
sleep 2
read -p "GİT Yükleme istiyor musunuz? E / H " updatedResult
if [[ $updatedResult == "E"  ||  $updatedResult == "e" ]]
then
	# Git
	echo   -e "\n###### GİT"  $INSTALL "######"
	sudo apt-get update
	sudo apt-get install git -y
	git version
	git config --global user.name "hamitmizrak"
	git config --global user.email "hamitmizrak@gmail.com"
	git config --global -l
	echo    -e "\n######"  "git" $VERSION  "######"
	git --version
else
    echo -e "Git Güncelleme Yapılmadı!!!\n "
fi
