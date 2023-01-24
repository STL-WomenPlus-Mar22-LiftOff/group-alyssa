package org.launchcode.backend.Repositories;

import org.launchcode.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    void deleteUserById(Long id);

    Optional<User> findUserById(Long id);

    Optional<User> findByUsername(String username);
}
