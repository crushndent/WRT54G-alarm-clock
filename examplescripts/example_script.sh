#!/bin/sh
gpio="gpio"

amber=3
white=2

delay=3

meltdown=400
overload=100
highload=70
medload=30

while sleep $delay;do
  set -- $(cat /proc/loadavg)
  load="${1%.*}${1#*.}"

  if [ $load -gt $meltdown ];then
    $gpio disable $amber
    usleep 50000
    $gpio disable $white
    usleep 50000
    reboot
  elif [ $load -gt $overload ];then
    $gpio disable $amber
    usleep 50000
   elif [ $load -gt $highload ];then
    $gpio disable $amber
    usleep 12500
    $gpio enable $amber
    usleep 12500
    $gpio disable $amber
    usleep 12500
    $gpio enable $amber
    usleep 12500
    $gpio disable $amber
    usleep 12500
    $gpio enable $amber
    usleep 12500
  elif [ $load -gt $medload ];then
    $gpio enable $amber
    $gpio disable $white
    usleep 25000
    $gpio enable $white
    usleep 25000
    $gpio disable $white
    usleep 25000
    $gpio enable $white
    usleep 25000
  else
    $gpio disable $white
    usleep 50000
    $gpio enable $white
    usleep 50000
  fi
done
