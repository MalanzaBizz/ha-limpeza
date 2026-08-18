"""Main entry point for H.A - Limpeza platform.

ENTRY-POINT-AUTOMATION-v1.0 compliance.
"""

from __future__ import annotations

import argparse
import http.server
import socketserver
import sys
import webbrowser
from pathlib import Path

VERSION = "1.0.0"
ROOT = Path(__file__).resolve().parent


def serve_web(port: int = 8000) -> None:
    """Serve the local web application."""
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        url = f"http://localhost:{port}/index.html"
        print(f"Serving H.A - Limpeza at {url} (Press Ctrl+C to stop)")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")


def run_pipeline() -> int:
    """Run generation scripts or headless sanity verification."""
    print("Running H.A - Limpeza build/verification pipeline...")
    gen_script = ROOT / "scripts" / "generate_docs_and_sheets.py"
    if gen_script.exists():
        import subprocess

        res = subprocess.run([sys.executable, str(gen_script)], cwd=str(ROOT))
        return res.returncode
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="H.A - Limpeza Application")
    parser.add_argument(
        "--version", action="version", version=f"%(prog)s {VERSION}"
    )

    subparsers = parser.add_subparsers(dest="command")

    # Run subcommand
    subparsers.add_parser("run", help="Run document and sheet generation pipeline")

    # GUI / Web subcommand
    gui_parser = subparsers.add_parser("gui", help="Open the interactive web application")
    gui_parser.add_argument("--port", type=int, default=8000, help="Port to bind local server")

    args = parser.parse_args(argv)

    if args.command == "run":
        return run_pipeline()
    elif args.command == "gui":
        serve_web(port=args.port)
        return 0
    else:
        # Default behavior if no subcommand
        parser.print_help()
        return 0


if __name__ == "__main__":
    sys.exit(main())
