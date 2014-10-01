#!/bin/sh
gpio="gpio"

amber=3
white=2

delay=60
URLS_FILE=/ftp/file

$gpio enable $white

while sleep $delay;do
	cd /temp
	wget -N -i=$URLS_FILE 
#use grep??
	if [ $CLOSED1 -gt $CLOSED_STRING1];then
		$gpio enable $amber
		$gpio disable $white
	else
		$gpio disable $amber
		$gpio enable $white
	fi
done

$gpio disable $white

#for finding just Rockford
	#(<)th.*(>)Rockford.*(<)\/th(>)
#anything not a tag
	#(?<=^|>)[^><]+?(?=<|$)
	#then take the output of this and search for:

gpio disable 1
gpio disable 0
gpio disable 2
cd /tmp/root
while sleep 60;do
	gpio enable 2
	gpio enable 3
	wget http://wcsg.org/closings/school/?county=Kent
	if fgrep -q "Rockford" * ; then
		gpio disable 3
		gpio enable 2
	else
		gpio enable 3
		gpio disable 2
	fi
done
gpio enable 1
gpio enable 0



#Amber - 3, white 2
gpio enable 3
gpio enable 2
cd /tmp/root
while 1
	if date - (between 5AM and 9AM)
		while
			wget http://wcsg.org/closings/school/?county=Kent
			if fgrep -q "Rockford" * ; then
				gpio disable 3
			else
				gpio enable 3
			fi
		done
	fi
	while $i != 0
		sleep 1
		enable 2
		sleep 1
		disable 2
		$i = $i - 1
	done
done

gpio enable 1
gpio enable 0
