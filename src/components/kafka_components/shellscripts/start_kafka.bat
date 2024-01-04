@echo off

cd C:\kafka_2.13-3.6.1

start "Zookeeper Server" cmd /c "bin\windows\zookeeper-server-start.bat config\zookeeper.properties"

timeout /nobreak /t 7 >nul

start "Kafka Server" cmd /c "bin\windows\kafka-server-start.bat config\server.properties"
