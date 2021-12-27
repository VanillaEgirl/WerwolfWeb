package com.tieber.werwolf.businesslogic

class Roles {
    companion object {
        fun getAll(): List<String> {
            val roles = mutableListOf<String>()

            roles.add("role1")
            roles.add("role2")

            return roles
        }
    }
}