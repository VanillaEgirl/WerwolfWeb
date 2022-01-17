package com.tieber.werwolf.rest

import com.tieber.werwolf.Constants
import com.tieber.werwolf.businesslogic.GameState
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = [Constants.FRONTEND_PATH])
class PlayerRestController {
    @GetMapping("/getPlayers")
    fun getPlayers(): List<String> {
        return GameState.currentState.players
    }

    @PostMapping("/setPlayers")
    fun setPlayers(players: List<String>) {
        GameState.currentState.players = players
    }
}