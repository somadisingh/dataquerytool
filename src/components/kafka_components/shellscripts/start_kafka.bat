@echo off

cd C:\kafka_2.13-3.6.1

start "Zookeeper Server" cmd /c "bin\windows\zookeeper-server-start.bat config\zookeeper.properties"

timeout /nobreak /t 3 >nul

start "Kafka Server" cmd /c "bin\windows\kafka-server-start.bat config\server.properties"

timeout /nobreak /t 3 >nul

start "consumer" cmd /c "bin\windows\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic kafka-1 --from-beginning"