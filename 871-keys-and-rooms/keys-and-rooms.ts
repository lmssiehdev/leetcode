function canVisitAllRooms(rooms: number[][]): boolean {
    let roomsVisited = 0;
    const seen = Array(rooms.length).fill(false);

    function traverse(roomIdx: number, seen: boolean[]) {


      // PRE
      if (seen[roomIdx]) return;
      seen[roomIdx] = true;

      ++roomsVisited;

      // TRAVERSE
      const room = rooms[roomIdx];
      for ( const key of room ) {
        if (key === 0) continue;
        if ( seen[key] ) continue;
        traverse(key, seen)
      }
    }
    traverse(0, seen)
    console.log(roomsVisited, rooms.length)
    return roomsVisited === rooms.length;
};