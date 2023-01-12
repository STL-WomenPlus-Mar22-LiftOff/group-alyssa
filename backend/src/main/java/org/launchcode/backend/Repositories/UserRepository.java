package org.launchcode.backend.Repositories;

import org.launchcode.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    void deleteUserById(Long id);

    Optional<User> findUserById(Long id);

    Optional<User> findUserByUsername(String username);
}
