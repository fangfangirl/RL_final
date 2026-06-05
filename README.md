# MMCR: Sequential Layer-wise Model Merging via Reinforcement Learning

This repository hosts the project page for **Final_RL** at National Yang Ming Chiao Tung University.

MMCR studies model merging as a sequential reinforcement learning problem. Instead of using one fixed global merging coefficient, the method learns layer-wise coefficients for combining task-specific encoder task vectors.

## Project Page

- Website: https://fangfangirl.github.io/RL_final/
- Source code: https://github.com/Jimmy005452/MMCR
- Report PDF: [static/pdfs/RL_final.pdf](static/pdfs/RL_final.pdf)

## Authors

Chou Fang Chang, Zi-Yong Lai, and Chih-Pao Lin  
National Yang Ming Chiao Tung University

## What This Page Contains

The website summarizes the full project directly on the GitHub project page, including:

- Motivation and problem setup for model merging
- MMCR pipeline and layer-wise MDP formulation
- State, action, reward, and model selection design
- GRPO + RLOO policy optimization details
- Main results across eight vision tasks
- Runtime and GPU parallelization comparison
- Ablation studies and final conclusions

## Main Result

MMCR reaches **86.41% average accuracy** across eight vision tasks. It slightly outperforms the longer AdaMerging-600 baseline and improves over TIES while using an RL-based layer-wise coefficient search.

## Repository Structure

```text
.
+-- index.html              # Main project page
+-- index_2.html            # Alternative lighter layout for comparison
+-- static/
|   +-- css/                # Page styles
|   +-- images/             # Icons and image assets
|   +-- pdfs/RL_final.pdf   # Final report PDF
+-- README.md
```

## Local Preview

Because this is a static website, it can be opened directly in a browser:

```text
index.html
```

For a local server preview, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Acknowledgments

This page was built using the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adopted from the [Nerfies](https://nerfies.github.io/) project page.

The website template is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
