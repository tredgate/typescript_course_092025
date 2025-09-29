const studentName = "Alžběta Novotná";
const actualPoints = 98;
const graduateLimit = 75;

if (actualPoints >= graduateLimit) {
  console.log(
    `${studentName} prospěl/a s ${actualPoints} body, minimum bylo: ${graduateLimit} bodů`
  );
} else {
  console.log(
    `${studentName} neprospěl/a s ${actualPoints} body, minimum bylo: ${graduateLimit} bodů, chybělo mu/jí ${
      graduateLimit - actualPoints
    } bodů.`
  );
}
