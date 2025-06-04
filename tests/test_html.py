import os
import subprocess


def test_index_html_valid():
    repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    cmd = [
        'html5validator',
        '--root', repo_root,
        '--match', 'index.html'
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    assert result.returncode == 0, f"Validation failed:\n{result.stdout}\n{result.stderr}"
