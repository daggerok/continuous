package daggerok;

import daggerok.config.ApplicationConfig;
import daggerok.data.AdminUser;
import daggerok.data.AdminUserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import java.util.stream.Stream;

import static java.util.Arrays.asList;

@SpringBootApplication
@Import(ApplicationConfig.class)
public class Application {

    @Bean
    CommandLineRunner dbLoader(final AdminUserRepository adminUserRepository,
                               @Value("${security.user.name:superadmin}") final String superuser,
                               @Value("${security.user.password:admin}") final String password) {

        if (adminUserRepository.count() > 3) {
            return null;
        }

        Stream.of("max", "bax")
                .forEach(name -> adminUserRepository.encodePasswordAndSave(new AdminUser()
                        .setRoles(asList("ADMIN"))
                        .setPassword(name)
                        .setUsername(name)
                        .setEnabled(true)));

        return args -> adminUserRepository.encodePasswordAndSave(new AdminUser()
                .setRoles(asList("ADMIN", "SUPERADMIN"))
                .setUsername(superuser)
                .setPassword(password)
                .setEnabled(true));
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
