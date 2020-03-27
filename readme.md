(RU)
Русификация https://github.com/dcm4che/dcm4chee-arc-light version 5.22 вариант nonsecure. 
Только эта версия!

1. Без исходников:

     1. Ставим https://github.com/dcm4che/dcm4chee-arc-light/wiki/Run-minimum-set-of-archive-services-on-a-single-host с окружением:

        https://github.com/birdflu/DICOMER/blob/master/docker-compose.env и https://github.com/birdflu/DICOMER/blob/master/docker-compose.yml

      2. останавливаем сервисы:

         `$docker-compose -p dcm4chee stop`

      3. копируем https://github.com/birdflu/DICOMER/blob/master/dcm4chee-arc-ui2-5.22.0-unsecure.war внутрь `/var/local/dcm4chee-arc/wildfly/deployments/dcm4chee-arc-ear-5.22.0-psql.ear`

      4. запускаем сервисы:

         `$docker-compose -p dcm4chee start`

2. С исходниками:

     1. Устанавливаем переменную окружения JAVA_HOME
     	Выполняем
     	
     	`$sudo vi /etc/environment`
     	и добавляем строку:
     `JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64`
     `export JAVA_HOME`

     	Auto complete
     	`$sudo vi ~/.bashrc`
     	и добавляем строку:
     	`source /etc/environment`
     	
     2. Инсталлируем Maven

     3. Качаем apache-maven-3.6.3-bin.tar.gz из http://maven.apache.org/download.cgi

     4. `$tar xzvf apache-maven-3.6.3-bin.tar.gz`

     5. `$sudo vi /etc/environment`
         и добавляем строку: 
           	`/home/med/apache-maven-3.6.3/bin` в PATH
         и проверяем: 
           	`$mvn -v`

     6. Git clone и Maven Install

       ```
       	$git clone https://github.com/dcm4che/dcm4chee-arc-light.git
       	$cd dcm4che
       	$mvn install -D db=psql
       ```

     7. Меняем в исходниках:
         ../dcm4chee-arc-light/dcm4chee-arc-ui2/src/main.ts
         на https://github.com/birdflu/DICOMER/blob/master/main.ts
         ../dcm4chee-arc-light/dcm4chee-arc-ui2/src/app/app.component.html
         на https://github.com/birdflu/DICOMER/blob/master/app.component.html
         ../dcm4chee-arc-light/dcm4chee-arc-ui2/src/app/study/study-tab.component.ts на https://github.com/birdflu/DICOMER/blob/master/app.component.html
         ../dcm4chee-arc-light/dcm4chee-arc-ui2/src/app/study/study/study.component.ts на https://github.com/birdflu/DICOMER/blob/master/study.component.ts
         и добавляем в 
         ../dcm4chee-arc-light/dcm4chee-arc-ui2/src/assets/locale/ файл с переводом https://github.com/birdflu/DICOMER/blob/master/ru.json

     8. После изменения исходников собираем проект:

       ```
       $mvn clean
       $mvn install -D db=psql
       ```

     9. Файл `dcm4chee-arc-ui2-5.22.0-unsecure.war` появится в папке `.m2/repository/org/dcm4che/dcm4chee-arc/dcm4chee-arc-ui2/5.22.0/`. Далее подменяем его как написано выше в пункте 1.3.

wiki: https://github.com/birdflu/DICOMER/wiki

(EN)

