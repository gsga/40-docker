# Especificar la base image. No vamos a trabajar con una
# imagen que está completamente vacía, sino con una que
# ya tiene cosas que necesitamos.
# https://docs.docker.com/engine/reference/builder/#from
FROM node:alpine

# Especificar el working directory
# https://docs.docker.com/engine/reference/builder/#workdir
# La instrucción WORKDIR establece el directorio de 
# trabajo para cualquier instrucción RUN, CMD, ENTRYPOINT, 
# COPY y ADD que le sigue en el Dockerfile. Si WORKDIR 
# no existe, se creará incluso si no se usa en 
# ninguna instrucción posterior de Dockerfile.
# Este el directorio en donde todos nuestros archivos van a estar
# y desde donde va a correr nuestro container. O sea, tal como
# se dijo antes, los comandos COPY y RUN que vienen después
# van a estar referidos a WORKDIR.
WORKDIR /usr/src/app

# https://docs.docker.com/engine/reference/builder/#copy
# COPY <src> <dest> copia archivos o directorios
# desde <src> y los agrega al file system del 
# container en el path <dest>.
# El punto (.) como segundo parámetro, o destination, es el working directory.
# Copiamos primero este file, porque Docker trabaja en layers,
# y de este modo si luego cambiamos otro file que no sea este,
# no necesitaremos correr de nuevo npm install, que es time consuming.
# El resto de los files los copiamos más adelante, y de ese modo los
# podemos cambiar sin incurrir en ese overhead.
# Primero copia los archivos y después corre 'npm install'.
# De ese modo, los node_modules estarán cacheados hasta
# que package.json o package-lock.json cambie.
COPY package.json .
COPY package-lock.json .

# https://docs.docker.com/engine/reference/builder/#run
# La instrucción RUN ejecuta los comandos que se le indican
# en una nueva capa superpuesta a los anteriores resultados
# y confirma todo.
# La imagen resultante confirmada será usada en el 
# siguiente paso en Dockerfile.
# Ahora instalamos todas las dependencias establecidas
# en package.json. Esto es lo que toma más tiempo, salvo 
# que estén cacheadas.
RUN npm install

# copy over all code files
# Copio todo lo que haya en este directorio, menos lo que ya
# he copiado antes.
COPY . .

# https://docs.docker.com/engine/reference/builder/#expose
# La instrucción EXPOSE informa a Docker que el container
# atiende a los puertos especificados del container en
# runtime.
# Uno puede especificar si el puerto atiende on TCP
# o UDP. Si no se especifica, el default es TCP.
# 
# You can specify whether the port listens on TCP or UDP,
# and the default is TCP if the protocol is not specified.
EXPOSE 4200

# https://docs.docker.com/engine/reference/builder/#cmd
# Ejecuta el comando ng serve
# specify default command to run when we run the image
# https://angular.io/cli/serve
# --host	              Host to listen on.              string	localhost
# --disable-host-check	Don't verify connected clients  boolean	false
#                       are part of allowed hosts.
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck