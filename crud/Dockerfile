# eclipse-temurin soporta versiones recientes del JDK.
# En muchos tutoriales usan openjdk, pero la documentación
# oficial dice que está deprecado.
FROM eclipse-temurin
ADD target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
