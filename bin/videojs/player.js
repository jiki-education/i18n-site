/**
 * Bundle entry for the self-hosted Video.js v10 player.
 *
 * This is the entry file Video.js's own "self-host the player" guide tells you to
 * write. bin/build-videojs runs esbuild over it from inside a checkout of
 * videojs/v10, where the workspace packages resolve, and drops the result into
 * public/videojs.
 *
 * Importing the skin pulls in every UI element it uses, so the player and the skin
 * are the whole player. The i18n import is the piece the self-host guide does not
 * mention: translation is provided by a separate <media-i18n> element that has to
 * be defined and has to wrap the player, and without it every string silently
 * stays English with no error to tell you why.
 */
import "@videojs/html/i18n";
import "@videojs/html/video/player";
import "@videojs/html/video/skin";
