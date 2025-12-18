## Repo Checkout
- Clone `https://github.com/leedale30/ABC-Music-Player-and-Display` into the workspace; current folder shows no project files, so pull from GitHub.
- List top-level files to identify language and build system (e.g., `package.json`, `pom.xml`, `build.gradle`, `README.md`).

## Tech Detection
- Detect runtime via presence of canonical files:
  - Node: `package.json` (scripts: `dev`, `start`, `build`).
  - Python: `pyproject.toml` or `requirements.txt` + an app entry (e.g., `app.py`).
  - Java: `pom.xml` (Maven), `build.gradle` (Gradle), or Eclipse-style `.classpath`/`src` with libs (common for ABC players).
  - Web-only: static HTML in `public/` or root.

## Setup & Run
- Node
  - Use Node 18+.
  - `npm install` (or `npm ci` if `package-lock.json` exists).
  - `npm run dev` or `npm start`; open the local URL.
- Python
  - Create venv, install deps (`pip install -r requirements.txt` or `pip install .`).
  - Run the app (`python app.py`, `uvicorn main:app --reload`, or project-specific entry).
- Java (likely for ABC player projects)
  - If Maven: `mvn -q -DskipTests package` then `java -jar target/<artifact>.jar`.
  - If Gradle: `./gradlew run` or `./gradlew build` + `java -jar build/libs/<artifact>.jar`.
  - If Eclipse-style (no build tool): compile `src` with classpath to `lib/` jars (e.g., ANTLR), then run main class (commonly `abc.player.Main`) pointing at a sample `.abc` file (e.g., `sample_abc/fur_elise.abc`).

## Verification
- If it starts a web server: open preview URL and confirm playback and display features work.
- If it’s a desktop/CLI app: run with a bundled sample `.abc` file and verify audio and display output.
- Capture logs, confirm no missing dependency errors (e.g., audio libs, ANTLR, soundfonts).

## Troubleshooting
- Missing JDK or wrong version: install JDK 8+ and set `JAVA_HOME`.
- Java classpath issues: ensure `lib/` jars included; fix main class/package path.
- Node module issues: clear cache and reinstall; check `nvm use` if `.nvmrc` exists.
- Python native deps: install OS packages if required; verify `portaudio`/audio backend if used.

## Deliverables
- Clone + detection summary.
- Exact commands executed.
- Running app with either a preview URL (web) or confirmed execution logs (desktop/CLI).
- Notes on any adjustments made to configuration.

## References
- Similar ABC player projects commonly use Java with Eclipse structure and sample `.abc` files (e.g., https://github.com/jaks19/Abc-Music-Player, https://github.com/NarekDshkhunyan/abc-music-player).