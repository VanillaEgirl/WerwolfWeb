package com.tieber.werwolf.rest

import com.tieber.werwolf.Constants
import com.tieber.werwolf.businesslogic.GameState
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = [Constants.FRONTEND_PATH])
class RolesRestController {
    @GetMapping("/allroles")
    fun getRoles(): List<String> {
        return GameState.allRoles
    }

    @PostMapping("/addrole")
    fun addRole(role: String) {
        println("new Role: $role")
    }
}