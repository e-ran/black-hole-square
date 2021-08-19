let update = (entities, entity, time, delta) => {
    if (entity.position !== undefined) {
        entity.position.x = entities.game.canvas.gW - 52;
        entity.position.y = 4;
    }
    let pointer = entities.game.pointer;
    if (pointer.justUp) {
        if (pointer.x < entity.position.x || pointer.y > entity.position.y + 48) {
            return;
        }
        let levels = entities.game.levels;
        let puzzleId = levels.sequence[levels.current];
        entities[puzzleId].puzzle.init = true;
        let state = entities.level.state;
        state.updates = [puzzleId];
        state.draws = [];
    }
};

export default Object.freeze({
    update
});
