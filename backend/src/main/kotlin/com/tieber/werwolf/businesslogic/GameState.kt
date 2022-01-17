package com.tieber.werwolf.businesslogic

class GameState(
        var players: List<String>,
        var roles: List<String>,
        var assignments: List<Assignment>,
) {
    companion object {
        var allRoles = mutableListOf("Werwolf", "Dorfbewohner", "Seherin")
        var currentState = GameState(mutableListOf("Adam", "Eva"), mutableListOf(), mutableListOf())
    }

}