# Especificar la base image.
# https://docs.docker.com/engine/reference/builder/#from
FROM node:alpine

# Especificar el working directory
# https://docs.docker.com/engine/reference/builder/#workdir
# The WORKDIR instruction sets the working directory
# for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions
# that follow it in the Dockerfile. If the WORKDIR doesn’t exist,
# it will be created even if it’s not used in any
# subsequent Dockerfile instruction.
# Este el directorio en donde todos nuestros archivos van a estar
# y desde donde va a correr nuestro container.
WORKDIR /app

# https://docs.docker.com/engine/reference/builder/#copy
# The COPY instruction copies new files or directories
# from <src> and adds them to the filesystem of the
# container at the path <dest>.
# Copiamos primero este file, porque Docker trabaja en layers,
# y de este modo si luego cambiamos otro file que no sea este,
# no necesitaremos correr de nuevo npm install, que es time consuming.
# El resto de los files los copiamos más adelante, y de ese modo los
# podemos cambiar sin incurrir en ese overhead.
# El punto (.) como segundo parámetro, o destination, es el working directory.
COPY package.json .

# https://docs.docker.com/engine/reference/builder/#run
# The RUN instruction will execute any commands in a
# new layer on top of the current image and commit the results.
# The resulting committed image will be used for the
# next step in the Dockerfile.
# Ahora instalamos todas las dependencias establecidas
# en package.json. Esto es lo que toma más tiempo, salvo que estén cacheadas.
RUN npm install

# Copio todo lo que haya en este directorio, menos el que ya
# he copiado antes. En este caso, solo es index.js.
COPY . .

# https://docs.docker.com/engine/reference/builder/#expose
# The EXPOSE instruction informs Docker that the container
# listens on the specified network ports at runtime.
# You can specify whether the port listens on TCP or UDP,
# and the default is TCP if the protocol is not specified.
EXPOSE 5000

# https://docs.docker.com/engine/reference/builder/#cmd
# Ejecuta el comando node, y le pasa como parámetro index.js.
CMD [ "node", "index.js" ]