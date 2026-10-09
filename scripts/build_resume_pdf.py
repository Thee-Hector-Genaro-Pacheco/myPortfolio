#!/usr/bin/env python3
"""
Canonical entrypoint for building Hector Genaro Pacheco's resume PDFs.
Dispatches directly to build_resumes.py which compiles all single-page ATS resume variants
and runs authoritative Swift PDFKit page count and link verification.
"""
import os
import sys

# Ensure scripts directory is on sys.path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from build_resumes import main

if __name__ == '__main__':
    main()
